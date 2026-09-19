import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi2jq6bjc.css';
import '../../css/m/mz86u9bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi2jq6bjc"/><path class="mz86u9bpz"/>`,
		"fallback": "bx:bxl-product-hunt",
	});
}

export default Component;
