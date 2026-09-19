import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn262acok.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn262acok"/>`,
		"fallback": "fluent-emoji-high-contrast:club-suit",
	});
}

export default Component;
