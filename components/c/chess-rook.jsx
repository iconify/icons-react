import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqk36966l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqk36966l"/>`,
		"fallback": "at-icons:chess-rook",
	});
}

export default Component;
