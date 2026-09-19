import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg1t8_b4v.css';
import '../../css/l/lr3x0vl_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg1t8_b4v"/><path class="lr3x0vl_g"/>`,
		"fallback": "bx:food-menu",
	});
}

export default Component;
