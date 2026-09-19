import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6nlirvnr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6nlirvnr"/>`,
		"fallback": "f7:arrow-right-arrow-left-circle",
	});
}

export default Component;
