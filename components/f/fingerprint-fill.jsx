import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpy5x2bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpy5x2bli"/>`,
		"fallback": "mingcute:fingerprint-fill",
	});
}

export default Component;
