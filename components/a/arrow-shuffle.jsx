import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvn77og9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvn77og9g"/>`,
		"fallback": "at-icons:arrow-shuffle",
	});
}

export default Component;
