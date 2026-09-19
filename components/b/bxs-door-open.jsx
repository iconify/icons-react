import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc2k5s1mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc2k5s1mv"/>`,
		"fallback": "bx:bxs-door-open",
	});
}

export default Component;
