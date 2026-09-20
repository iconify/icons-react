import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8l00fqcj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8l00fqcj"/>`,
		"fallback": "qlementine-icons:increase-16",
	});
}

export default Component;
