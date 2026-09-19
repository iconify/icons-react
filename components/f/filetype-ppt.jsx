import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji7x0bcjo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji7x0bcjo"/>`,
		"fallback": "bi:filetype-ppt",
	});
}

export default Component;
