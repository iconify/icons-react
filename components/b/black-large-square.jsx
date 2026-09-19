import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gae3ks5tg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gae3ks5tg"/>`,
		"fallback": "fluent-emoji-high-contrast:black-large-square",
	});
}

export default Component;
