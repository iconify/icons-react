import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2pw65d4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2pw65d4o"/>`,
		"fallback": "griddy-icons:arrow-up-left",
	});
}

export default Component;
