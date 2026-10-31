import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/ru0ogu6ne.css';
import '../../css/h/hvf9obccc.css';
import '../../css/z/zov6w8o_w.css';
import '../../css/o/oha5ghnpr.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ru0ogu6ne wm-shadow"/><path class="hvf9obccc wm-shadow"/><path class="zov6w8o_w"/><path class="oha5ghnpr"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:flag-off",
	});
}

export default Component;
