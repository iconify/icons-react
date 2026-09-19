import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaybi2sll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaybi2sll"/>`,
		"fallback": "garden:arrow-left-sm-stroke-16",
	});
}

export default Component;
