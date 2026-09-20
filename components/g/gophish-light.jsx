import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3r9d2zij.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3r9d2zij"/>`,
		"fallback": "selfhst:gophish-light",
	});
}

export default Component;
