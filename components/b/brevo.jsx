import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sya7x0bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sya7x0bga"/>`,
		"fallback": "thesvg:brevo",
	});
}

export default Component;
