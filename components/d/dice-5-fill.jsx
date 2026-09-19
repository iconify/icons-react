import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2xkvt2tm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2xkvt2tm"/>`,
		"fallback": "bi:dice-5-fill",
	});
}

export default Component;
