import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auk_w91qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auk_w91qr"/>`,
		"fallback": "uil:comparison",
	});
}

export default Component;
