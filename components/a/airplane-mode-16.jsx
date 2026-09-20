import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b630ko33l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b630ko33l"/>`,
		"fallback": "qlementine-icons:airplane-mode-16",
	});
}

export default Component;
