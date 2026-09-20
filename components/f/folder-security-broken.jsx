import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qw0rhm64r.css';
import '../../css/r/rkxx7jn-k.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="qw0rhm64r"/><path class="rkxx7jn-k"/><path class="i4dcgmbin"/></g>`,
		"fallback": "solar:folder-security-broken",
	});
}

export default Component;
