import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h477q4bel.css';
import '../../css/y/yh6hz8b9k.css';
import '../../css/o/o7cgxubkk.css';
import '../../css/e/er-qp_bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h477q4bel"/><path class="yh6hz8b9k"/><circle class="o7cgxubkk"/><path class="er-qp_bxv"/></g>`,
		"fallback": "solar:album-line-duotone",
	});
}

export default Component;
