import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxu8d89-t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxu8d89-t"/>`,
		"fallback": "fluent-emoji-high-contrast:baseball",
	});
}

export default Component;
