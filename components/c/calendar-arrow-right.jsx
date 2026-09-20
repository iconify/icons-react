import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc2v8ab1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc2v8ab1b"/>`,
		"fallback": "keyline-icons:calendar-arrow-right",
	});
}

export default Component;
