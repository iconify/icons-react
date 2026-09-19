import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5-8z9xxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5-8z9xxl"/>`,
		"fallback": "fluent-emoji-high-contrast:clinking-glasses",
	});
}

export default Component;
