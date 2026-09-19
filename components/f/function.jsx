import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0uxdcrqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0uxdcrqp"/>`,
		"fallback": "at-icons:function",
	});
}

export default Component;
