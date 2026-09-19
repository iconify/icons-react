import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezo8b9p0b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezo8b9p0b"/>`,
		"fallback": "bi:emoji-tear-fill",
	});
}

export default Component;
