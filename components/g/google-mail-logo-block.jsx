import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf8h-u92t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf8h-u92t"/>`,
		"fallback": "streamline-logos:google-mail-logo-block",
	});
}

export default Component;
