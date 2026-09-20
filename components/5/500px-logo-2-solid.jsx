import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayho2yb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayho2yb_o"/>`,
		"fallback": "streamline-logos:500px-logo-2-solid",
	});
}

export default Component;
