import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5ekv3_nq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5ekv3_nq"/>`,
		"fallback": "bi:arrow-up-square",
	});
}

export default Component;
