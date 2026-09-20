import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo2ouibij.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo2ouibij"/>`,
		"fallback": "lineicons:heart-monitor",
	});
}

export default Component;
