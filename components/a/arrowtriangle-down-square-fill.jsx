import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm7raibzo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm7raibzo"/>`,
		"fallback": "f7:arrowtriangle-down-square-fill",
	});
}

export default Component;
