import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl9l6sb5q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rl9l6sb5q"/>`,
		"fallback": "heroicons:arrow-uturn-up-16-solid",
	});
}

export default Component;
