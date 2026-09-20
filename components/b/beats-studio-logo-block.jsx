import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8us4sbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f8us4sbup"/>`,
		"fallback": "streamline-logos:beats-studio-logo-block",
	});
}

export default Component;
