import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejn5f_bfa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejn5f_bfa"/>`,
		"fallback": "fluent-emoji-high-contrast:hot-dog",
	});
}

export default Component;
