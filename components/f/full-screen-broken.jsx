import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/a/apdq1ub8p.css';
import '../../css/r/ros5bvrws.css';
import '../../css/z/ztbmtjbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x-1lf64uh"/><path class="apdq1ub8p"/><path class="ros5bvrws"/><path class="ztbmtjbiz"/></g>`,
		"fallback": "solar:full-screen-broken",
	});
}

export default Component;
