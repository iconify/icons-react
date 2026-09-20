import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ukl6p-1du.css';
import '../../css/h/hn33hxbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ukl6p-1du"/><path class="hn33hxbrt"/></g>`,
		"fallback": "tabler:camera-share",
	});
}

export default Component;
