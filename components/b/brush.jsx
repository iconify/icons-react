import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy9_-jbhs.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy9_-jbhs"/>`,
		"fallback": "fa6-solid:brush",
	});
}

export default Component;
