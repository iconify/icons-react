import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9z3f3bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9z3f3bve"/>`,
		"fallback": "mynaui:grid-one-solid",
	});
}

export default Component;
