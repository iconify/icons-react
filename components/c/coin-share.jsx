import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3hx6xb4b.css';
import '../../css/b/b31gozaoh.css';
import '../../css/x/x-a2rqbzh.css';
import '../../css/u/u2_4_o61j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3hx6xb4b"/><path class="b31gozaoh"/><path class="x-a2rqbzh"/><path class="u2_4_o61j"/></g>`,
		"fallback": "streamline-color:coin-share",
	});
}

export default Component;
