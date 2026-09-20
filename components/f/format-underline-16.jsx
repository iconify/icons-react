import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1rj3bivm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1rj3bivm"/>`,
		"fallback": "qlementine-icons:format-underline-16",
	});
}

export default Component;
