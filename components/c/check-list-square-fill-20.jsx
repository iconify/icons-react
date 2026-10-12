import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8j-v7bth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8j-v7bth"/>`,
		"fallback": "garden:check-list-square-fill-20",
	});
}

export default Component;
