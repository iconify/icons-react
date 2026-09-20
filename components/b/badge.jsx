import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z09solb1k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z09solb1k"/>`,
		"fallback": "simple-line-icons:badge",
	});
}

export default Component;
