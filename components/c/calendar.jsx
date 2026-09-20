import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz6p9fyrs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz6p9fyrs"/>`,
		"fallback": "zondicons:calendar",
	});
}

export default Component;
