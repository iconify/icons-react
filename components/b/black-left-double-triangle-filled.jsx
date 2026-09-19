import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0yhf0b6q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0yhf0b6q"/>`,
		"fallback": "dinkie-icons:black-left-double-triangle-filled",
	});
}

export default Component;
