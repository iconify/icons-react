import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avq__8bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avq__8bae"/>`,
		"fallback": "keyline-icons:code-xml",
	});
}

export default Component;
