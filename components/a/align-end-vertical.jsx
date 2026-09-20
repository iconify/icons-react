import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f59vpabbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f59vpabbi"/>`,
		"fallback": "pixelarticons:align-end-vertical",
	});
}

export default Component;
