import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/skgb1wbjs.css';
import '../../css/g/gezngsbej.css';
import '../../css/z/zy_z_lmnz.css';
import '../../css/w/w4v_cgusb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="skgb1wbjs wm-shadow"/><path class="gezngsbej wm-shadow"/><path class="zy_z_lmnz"/><path class="w4v_cgusb"/></g>`,
		"fallback": "withicons-brutal:baseball",
	});
}

export default Component;
