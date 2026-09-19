import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-1rxo8ja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-1rxo8ja"/>`,
		"fallback": "bi:bezier2",
	});
}

export default Component;
