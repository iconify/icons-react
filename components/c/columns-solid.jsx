import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxkark7nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxkark7nm"/>`,
		"fallback": "withicons:columns-solid",
	});
}

export default Component;
