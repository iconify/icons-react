import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysi0uubkv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysi0uubkv"/>`,
		"fallback": "system-uicons:display",
	});
}

export default Component;
