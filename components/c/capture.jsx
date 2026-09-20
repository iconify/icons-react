import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maxs7mbxj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maxs7mbxj"/>`,
		"fallback": "system-uicons:capture",
	});
}

export default Component;
