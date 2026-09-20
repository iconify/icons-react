import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9s618baa.css';
import '../../css/y/yhxk83rhw.css';
import '../../css/v/vi9tggbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y9s618baa"/><path class="yhxk83rhw"/><path class="vi9tggbvx"/></g>`,
		"fallback": "solar:align-horizonta-spacing-broken",
	});
}

export default Component;
