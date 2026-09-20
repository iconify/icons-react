import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x65263l8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x65263l8a"/>`,
		"fallback": "streamline-logos:feathub-logo",
	});
}

export default Component;
