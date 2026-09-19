import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc1rzpn4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc1rzpn4w"/>`,
		"fallback": "bx:bxs-inbox",
	});
}

export default Component;
