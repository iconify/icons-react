import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yah-9lw2m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yah-9lw2m"/>`,
		"fallback": "streamline:definition-search-book-remix",
	});
}

export default Component;
