import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1zgz_b9n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1zgz_b9n"/>`,
		"fallback": "bi:caret-right-fill",
	});
}

export default Component;
