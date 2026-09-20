import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9s618baa.css';
import '../../css/e/ez9x9wbch.css';
import '../../css/y/y-18oobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y9s618baa"/><path class="ez9x9wbch"/><path class="y-18oobhf"/></g>`,
		"fallback": "solar:align-horizonta-spacing-linear",
	});
}

export default Component;
