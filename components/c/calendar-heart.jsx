import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0hkt3blc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0hkt3blc"/>`,
		"fallback": "bi:calendar-heart",
	});
}

export default Component;
