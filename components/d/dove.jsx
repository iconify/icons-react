import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvcs251if.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvcs251if"/>`,
		"fallback": "fa-solid:dove",
	});
}

export default Component;
