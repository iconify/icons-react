import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo08aslyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fo08aslyx"/>`,
		"fallback": "streamline-logos:facebook-logo-2-block",
	});
}

export default Component;
