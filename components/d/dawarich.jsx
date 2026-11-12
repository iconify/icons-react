import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts3lanhek.css';
import '../../css/m/mlhjt3b1y.css';
import '../../css/b/bri9cxbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts3lanhek"/><path class="mlhjt3b1y"/><path class="bri9cxbwl"/>`,
		"fallback": "selfhst:dawarich",
	});
}

export default Component;
