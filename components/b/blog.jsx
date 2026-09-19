import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu1n0r_6s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu1n0r_6s"/>`,
		"fallback": "fa7-solid:blog",
	});
}

export default Component;
