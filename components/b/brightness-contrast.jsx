import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jetbey4kh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jetbey4kh"/>`,
		"fallback": "carbon:brightness-contrast",
	});
}

export default Component;
