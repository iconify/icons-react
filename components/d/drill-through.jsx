import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7-k3vx_v.css';
import '../../css/i/i-hdiybge.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7-k3vx_v"/><path class="i-hdiybge"/>`,
		"fallback": "carbon:drill-through",
	});
}

export default Component;
