import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_besiboy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_besiboy"/>`,
		"fallback": "fluent-emoji-high-contrast:ear-with-hearing-aid",
	});
}

export default Component;
