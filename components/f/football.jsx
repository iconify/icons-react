import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edzw4y5pf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edzw4y5pf"/>`,
		"fallback": "whh:football",
	});
}

export default Component;
