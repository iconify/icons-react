import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5fms6pzw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5fms6pzw"/>`,
		"fallback": "fa7-brands:hips",
	});
}

export default Component;
