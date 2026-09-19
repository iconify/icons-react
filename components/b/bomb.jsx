import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkevdq1tb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkevdq1tb"/>`,
		"fallback": "fluent-emoji-high-contrast:bomb",
	});
}

export default Component;
