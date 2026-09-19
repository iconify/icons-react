import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1no9fr_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1no9fr_j"/>`,
		"fallback": "bi:bag-fill",
	});
}

export default Component;
