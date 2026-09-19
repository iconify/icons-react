import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhfrh6b7b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhfrh6b7b"/>`,
		"fallback": "at-icons:bowling-ball",
	});
}

export default Component;
