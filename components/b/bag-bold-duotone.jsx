import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7-h_b7c.css';
import '../../css/u/uq0t-hbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li7-h_b7c"/><path class="uq0t-hbet"/>`,
		"fallback": "solar:bag-bold-duotone",
	});
}

export default Component;
