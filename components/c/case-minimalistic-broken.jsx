import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rkzreok7b.css';
import '../../css/u/urf4u6bno.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';
import '../../css/f/f6-18mutx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rkzreok7b"/><path class="urf4u6bno"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/><path class="f6-18mutx"/></g>`,
		"fallback": "solar:case-minimalistic-broken",
	});
}

export default Component;
