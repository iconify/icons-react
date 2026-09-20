import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue_x4m1-r.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue_x4m1-r"/>`,
		"fallback": "system-uicons:chevron-up-double",
	});
}

export default Component;
