import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sttxumbbq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sttxumbbq"/>`,
		"fallback": "fluent-emoji-high-contrast:black-medium-small-square",
	});
}

export default Component;
