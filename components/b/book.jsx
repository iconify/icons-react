import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-0u1nyfl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-0u1nyfl"/>`,
		"fallback": "pinhead:book",
	});
}

export default Component;
