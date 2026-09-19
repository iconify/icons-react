import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9c7y2l-r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9c7y2l-r"/>`,
		"fallback": "f7:arrow-up-left-circle-fill",
	});
}

export default Component;
