import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g8qfvnbjm.css';
import '../../css/a/akoyrjbox.css';
import '../../css/s/surj41b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="g8qfvnbjm"/><path class="akoyrjbox"/><path class="surj41b2b"/></g>`,
		"fallback": "hugeicons:contrast",
	});
}

export default Component;
