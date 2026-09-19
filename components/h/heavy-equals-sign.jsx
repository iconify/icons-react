import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or7ddzi3a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or7ddzi3a"/>`,
		"fallback": "fluent-emoji-high-contrast:heavy-equals-sign",
	});
}

export default Component;
