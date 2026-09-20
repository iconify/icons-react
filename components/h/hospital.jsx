import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz6hmub-m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz6hmub-m"/>`,
		"fallback": "picon:hospital",
	});
}

export default Component;
