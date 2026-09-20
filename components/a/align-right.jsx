import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_b2bhblz.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_b2bhblz"/>`,
		"fallback": "wpf:align-right",
	});
}

export default Component;
