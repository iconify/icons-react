import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntvn5jw-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ntvn5jw-o"/>`,
		"fallback": "streamline-logos:dailymotion-logo-block",
	});
}

export default Component;
