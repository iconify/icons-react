import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbfw6_xpm.css';
import '../../css/o/oo-27jq7t.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 3.77 22.3)" class="bbfw6_xpm"/><rect transform="rotate(-90 3.77 22.3)" class="oo-27jq7t"/><path class="xtyg9db9j"/></g>`,
		"fallback": "andrsrxn:device-tablet",
	});
}

export default Component;
