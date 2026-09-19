import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0kp65hhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0kp65hhk"/>`,
		"fallback": "bi:flask-florence",
	});
}

export default Component;
