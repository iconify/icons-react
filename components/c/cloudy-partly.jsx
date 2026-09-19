import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqwj2vsxp.css';
import '../../css/f/f-06bvmrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqwj2vsxp"/><path class="f-06bvmrj"/></g>`,
		"fallback": "griddy-icons:cloudy-partly",
	});
}

export default Component;
