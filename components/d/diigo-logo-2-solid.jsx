import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu3-adbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eu3-adbym"/>`,
		"fallback": "streamline-logos:diigo-logo-2-solid",
	});
}

export default Component;
