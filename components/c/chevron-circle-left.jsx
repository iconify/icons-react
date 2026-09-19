import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc_60jfce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc_60jfce"/>`,
		"fallback": "fa-solid:chevron-circle-left",
	});
}

export default Component;
