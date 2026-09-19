import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx_6pdo2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx_6pdo2n"/>`,
		"fallback": "at-icons:institutional-building",
	});
}

export default Component;
