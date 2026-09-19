import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6moad0xy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6moad0xy"/>`,
		"fallback": "dinkie-icons:closed-book-filled",
	});
}

export default Component;
