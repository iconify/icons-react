import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv0upry8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv0upry8h"/>`,
		"fallback": "mingcute:avalanche-avax-line",
	});
}

export default Component;
