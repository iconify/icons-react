import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd1vemi5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd1vemi5z"/>`,
		"fallback": "fa-solid:cloud-meatball",
	});
}

export default Component;
