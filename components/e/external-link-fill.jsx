import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyn4ahb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyn4ahb-h"/>`,
		"fallback": "mingcute:external-link-fill",
	});
}

export default Component;
