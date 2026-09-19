import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv43bx5pq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv43bx5pq"/>`,
		"fallback": "whh:fantastico",
	});
}

export default Component;
