import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbf1gqvqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbf1gqvqf"/>`,
		"fallback": "bi:calendar4",
	});
}

export default Component;
