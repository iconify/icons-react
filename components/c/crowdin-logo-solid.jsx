import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjjqoz9le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjjqoz9le"/>`,
		"fallback": "streamline-logos:crowdin-logo-solid",
	});
}

export default Component;
