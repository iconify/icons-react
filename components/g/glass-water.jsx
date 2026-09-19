import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u547jf1nk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u547jf1nk"/>`,
		"fallback": "fa7-solid:glass-water",
	});
}

export default Component;
