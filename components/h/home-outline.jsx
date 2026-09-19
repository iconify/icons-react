import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocleddcfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="home-outline"><path class="(Stroke) Vector ocleddcfu" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:home-outline",
	});
}

export default Component;
