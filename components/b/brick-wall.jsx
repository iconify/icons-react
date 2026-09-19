import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_n5p1bzv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_n5p1bzv"/>`,
		"fallback": "at-icons:brick-wall",
	});
}

export default Component;
