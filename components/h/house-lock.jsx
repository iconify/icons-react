import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_b8f-hbm.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_b8f-hbm"/>`,
		"fallback": "fa6-solid:house-lock",
	});
}

export default Component;
