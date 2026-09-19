import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3_x92bav.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3_x92bav"/>`,
		"fallback": "bi:ear",
	});
}

export default Component;
