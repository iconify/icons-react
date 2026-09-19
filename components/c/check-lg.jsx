import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwqh1bcon.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwqh1bcon"/>`,
		"fallback": "bi:check-lg",
	});
}

export default Component;
