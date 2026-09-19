import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izmr92e0h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izmr92e0h"/>`,
		"fallback": "fluent-mdl2:entry-view",
	});
}

export default Component;
