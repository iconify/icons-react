import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm52svw0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm52svw0n"/>`,
		"fallback": "mdi:code-block-parentheses",
	});
}

export default Component;
