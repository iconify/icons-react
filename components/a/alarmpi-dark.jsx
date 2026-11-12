import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz-djh8ql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz-djh8ql"/>`,
		"fallback": "selfhst:alarmpi-dark",
	});
}

export default Component;
