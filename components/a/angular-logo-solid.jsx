import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wstd-w0xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wstd-w0xg"/>`,
		"fallback": "streamline-logos:angular-logo-solid",
	});
}

export default Component;
