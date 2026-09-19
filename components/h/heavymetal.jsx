import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu6p_sb1e.css';

const viewBox = {"width":705,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu6p_sb1e"/>`,
		"fallback": "whh:heavymetal",
	});
}

export default Component;
