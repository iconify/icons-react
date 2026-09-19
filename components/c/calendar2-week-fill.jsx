import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jceo9d0_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jceo9d0_p"/>`,
		"fallback": "bi:calendar2-week-fill",
	});
}

export default Component;
