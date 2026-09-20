import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t52p9_bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t52p9_bnf"/>`,
		"fallback": "lets-icons:basket-alt-light",
	});
}

export default Component;
