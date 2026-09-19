import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q841-ov0l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q841-ov0l"/>`,
		"fallback": "f7:cart-fill-badge-minus",
	});
}

export default Component;
