import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzpkb4b_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzpkb4b_x"/>`,
		"fallback": "carbon:compare",
	});
}

export default Component;
