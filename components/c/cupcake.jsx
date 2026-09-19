import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lin73466f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lin73466f"/>`,
		"fallback": "fluent-emoji-high-contrast:cupcake",
	});
}

export default Component;
