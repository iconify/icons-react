import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz3l2qr4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz3l2qr4w"/>`,
		"fallback": "tabler:device-mobile-bolt",
	});
}

export default Component;
