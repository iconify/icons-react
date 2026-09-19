import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6p98jb4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6p98jb4r"/>`,
		"fallback": "garden:arrow-left-up-fill-16",
	});
}

export default Component;
