import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7yndj7yd.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7yndj7yd"/>`,
		"fallback": "jam:code",
	});
}

export default Component;
