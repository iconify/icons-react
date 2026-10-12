import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uluoubbrd.css';
import '../../css/c/c225mmbyl.css';
import '../../css/l/l5ul_sbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uluoubbrd"/><path class="c225mmbyl"/><path class="l5ul_sbmh"/></g>`,
		"fallback": "lucide-extended:arrow-big-up-dash-duotone",
	});
}

export default Component;
