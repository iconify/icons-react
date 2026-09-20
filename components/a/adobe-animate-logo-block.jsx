import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh-974bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sh-974bjo"/>`,
		"fallback": "streamline-logos:adobe-animate-logo-block",
	});
}

export default Component;
