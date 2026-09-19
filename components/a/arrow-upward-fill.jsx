import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fof7p7mfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fof7p7mfa"/>`,
		"fallback": "eva:arrow-upward-fill",
	});
}

export default Component;
