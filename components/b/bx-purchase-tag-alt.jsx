import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrxw13bgw.css';
import '../../css/c/c6a7psbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrxw13bgw"/><circle class="c6a7psbpd"/>`,
		"fallback": "bx:bx-purchase-tag-alt",
	});
}

export default Component;
