import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l5zlzk4nh.css';
import '../../css/r/rv-h5hxws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l5zlzk4nh"/><path class="rv-h5hxws"/></g>`,
		"fallback": "tabler:folders-off",
	});
}

export default Component;
