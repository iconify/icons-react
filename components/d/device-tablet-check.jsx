import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbfw6_xpm.css';
import '../../css/m/mxg1xeb3q.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/s/s33ksmbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 3.77 22.3)" class="bbfw6_xpm"/><path class="mxg1xeb3q"/><path class="xtyg9db9j"/><path class="s33ksmbmg"/></g>`,
		"fallback": "andrsrxn:device-tablet-check",
	});
}

export default Component;
