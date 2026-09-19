import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frlfe4b7z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frlfe4b7z"/>`,
		"fallback": "fluent-emoji-high-contrast:cigarette",
	});
}

export default Component;
