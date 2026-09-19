import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0t2vwz9n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0t2vwz9n"/>`,
		"fallback": "f7:ear",
	});
}

export default Component;
