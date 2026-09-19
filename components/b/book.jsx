import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-w62qh5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-w62qh5k"/>`,
		"fallback": "codicon:book",
	});
}

export default Component;
