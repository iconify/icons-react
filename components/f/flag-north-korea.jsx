import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/l/ly-2njb2x.css';
import '../../css/f/f35vh31_y.css';
import '../../css/u/u_fw-_buq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><circle class="ly-2njb2x"/><path class="f35vh31_y"/><path class="u_fw-_buq"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-north-korea",
	});
}

export default Component;
