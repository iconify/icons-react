import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr1e2hb_o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr1e2hb_o"/>`,
		"fallback": "carbon:feature-membership",
	});
}

export default Component;
