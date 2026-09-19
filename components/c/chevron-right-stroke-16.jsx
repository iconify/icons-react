import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhxbuibje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhxbuibje"/>`,
		"fallback": "garden:chevron-right-stroke-16",
	});
}

export default Component;
