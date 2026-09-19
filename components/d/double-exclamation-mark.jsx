import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwoo6cbix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwoo6cbix"/>`,
		"fallback": "fluent-emoji-flat:double-exclamation-mark",
	});
}

export default Component;
