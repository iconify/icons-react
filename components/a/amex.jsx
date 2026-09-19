import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q30h_ub4q.css';
import '../../css/j/jt5qtmb5c.css';
import '../../css/e/eja3lnjju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q30h_ub4q"/><path class="jt5qtmb5c"/><path class="eja3lnjju"/>`,
		"fallback": "bxl:amex",
	});
}

export default Component;
