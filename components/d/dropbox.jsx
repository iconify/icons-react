import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7dn_sbsa.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7dn_sbsa"/>`,
		"fallback": "ps:dropbox",
	});
}

export default Component;
