import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/f/fxx58-o_d.css';
import '../../css/c/ctj1zzbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="fxx58-o_d"/><path class="ctj1zzbla"/></g>`,
		"fallback": "humbleicons:corner-down-left",
	});
}

export default Component;
