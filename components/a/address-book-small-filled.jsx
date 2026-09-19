import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dovwo7b4t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dovwo7b4t"/>`,
		"fallback": "dinkie-icons:address-book-small-filled",
	});
}

export default Component;
