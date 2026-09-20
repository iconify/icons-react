import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu5cqxbmo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fu5cqxbmo"/>`,
		"fallback": "qlementine-icons:chevron-up-12",
	});
}

export default Component;
