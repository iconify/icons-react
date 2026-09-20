import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n90tau3hd.css';
import '../../css/g/ggkp43bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n90tau3hd"/><path class="ggkp43bmx"/></g>`,
		"fallback": "tabler:camera-cancel",
	});
}

export default Component;
