import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy7ceab4o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy7ceab4o"/>`,
		"fallback": "heroicons:bookmark-slash-20-solid",
	});
}

export default Component;
