import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws1-s1f7u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws1-s1f7u"/>`,
		"fallback": "fa6-solid:chair",
	});
}

export default Component;
