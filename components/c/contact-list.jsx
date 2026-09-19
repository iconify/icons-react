import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1a3txb8r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1a3txb8r"/>`,
		"fallback": "fluent-mdl2:contact-list",
	});
}

export default Component;
