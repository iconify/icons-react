import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy9hzbckf.css';
import '../../css/q/qvp54bspk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zy9hzbckf"/><path class="qvp54bspk"/></g>`,
		"fallback": "flowbite:chart-line-up-solid",
	});
}

export default Component;
