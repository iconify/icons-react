import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg0_1ub4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg0_1ub4c"/>`,
		"fallback": "ri:indent-decrease",
	});
}

export default Component;
