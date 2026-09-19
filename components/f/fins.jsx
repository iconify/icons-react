import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0_k6zb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0_k6zb5m"/>`,
		"fallback": "hugeicons:fins",
	});
}

export default Component;
