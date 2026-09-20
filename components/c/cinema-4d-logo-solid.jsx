import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyj3mqs7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cyj3mqs7v"/>`,
		"fallback": "streamline-logos:cinema-4d-logo-solid",
	});
}

export default Component;
