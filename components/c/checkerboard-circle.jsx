import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzn5fjbqn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzn5fjbqn"/>`,
		"fallback": "at-icons:checkerboard-circle",
	});
}

export default Component;
