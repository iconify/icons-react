import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wk0iqkb3f.css';
import '../../css/t/tqifbt-qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wk0iqkb3f"/><path class="tqifbt-qz"/></g>`,
		"fallback": "solar:file-zip-broken",
	});
}

export default Component;
