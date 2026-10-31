import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m0y0vys4k.css';
import '../../css/o/ojoagmbpt.css';
import '../../css/u/ub3tv7bue.css';
import '../../css/s/srqnpzlqw.css';
import '../../css/z/zjgvabcro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m0y0vys4k wm-shadow"/><path class="ojoagmbpt wm-shadow"/><path class="ub3tv7bue"/><path class="srqnpzlqw"/><path class="zjgvabcro"/></g>`,
		"fallback": "withicons-brutal:gift-stack",
	});
}

export default Component;
