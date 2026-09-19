import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3v0e9b8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3v0e9b8f"/>`,
		"fallback": "fluent-emoji-high-contrast:candy",
	});
}

export default Component;
