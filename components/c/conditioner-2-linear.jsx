import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xcw0p3bti.css';
import '../../css/s/st1-3c4aa.css';
import '../../css/w/wm9jnnb5f.css';
import '../../css/y/yasfyvbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xcw0p3bti"/><path class="st1-3c4aa"/><path class="wm9jnnb5f"/><path class="yasfyvbyk"/></g>`,
		"fallback": "solar:conditioner-2-linear",
	});
}

export default Component;
