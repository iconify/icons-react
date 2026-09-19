import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p3vlh0i5k.css';
import '../../css/s/sv46fbc_x.css';
import '../../css/j/jvu6wz0nf.css';
import '../../css/d/dzz9y9h1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="p3vlh0i5k"/><path class="sv46fbc_x"/><path class="jvu6wz0nf"/><path class="dzz9y9h1x"/></g>`,
		"fallback": "hugeicons:airdrop",
	});
}

export default Component;
