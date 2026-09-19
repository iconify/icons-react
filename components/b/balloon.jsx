import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc595q_yl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc595q_yl"/>`,
		"fallback": "bi:balloon",
	});
}

export default Component;
