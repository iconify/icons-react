import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpu0h8btk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpu0h8btk"/>`,
		"fallback": "bi:chevron-bar-left",
	});
}

export default Component;
