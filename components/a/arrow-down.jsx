import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3hk2vf-m.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3hk2vf-m"/>`,
		"fallback": "lineicons:arrow-down",
	});
}

export default Component;
