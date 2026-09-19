import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj3bwf33h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj3bwf33h"/>`,
		"fallback": "fa7-solid:circle-chevron-left",
	});
}

export default Component;
