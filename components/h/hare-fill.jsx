import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eed4xfb9j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eed4xfb9j"/>`,
		"fallback": "f7:hare-fill",
	});
}

export default Component;
