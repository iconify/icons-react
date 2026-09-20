import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtv5yrb6k.css';
import '../../css/s/stxf-nbvm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtv5yrb6k"/><path class="stxf-nbvm"/>`,
		"fallback": "lineicons:dashboard",
	});
}

export default Component;
