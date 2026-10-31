import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mv13hkb7j.css';
import '../../css/a/apqyakjsb.css';
import '../../css/o/oqburxzbi.css';
import '../../css/r/rr8yufi7o.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mv13hkb7j wm-shadow"/><path class="apqyakjsb wm-shadow"/><path class="oqburxzbi"/><path class="rr8yufi7o"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:eye-off",
	});
}

export default Component;
