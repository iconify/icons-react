import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u25liwb6j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u25liwb6j"/>`,
		"fallback": "fa7-solid:filter",
	});
}

export default Component;
