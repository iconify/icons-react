import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3b0tachj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3b0tachj"/>`,
		"fallback": "roentgen:food-court",
	});
}

export default Component;
