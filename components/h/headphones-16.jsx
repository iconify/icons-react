import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps04a2jte.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ps04a2jte"/>`,
		"fallback": "qlementine-icons:headphones-16",
	});
}

export default Component;
