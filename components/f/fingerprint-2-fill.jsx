import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me_w7zb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me_w7zb_f"/>`,
		"fallback": "mingcute:fingerprint-2-fill",
	});
}

export default Component;
