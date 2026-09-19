import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dney3v3pk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dney3v3pk"/>`,
		"fallback": "fluent-mdl2:contact-card",
	});
}

export default Component;
