import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1cyggo8h.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1cyggo8h"/>`,
		"fallback": "fa-solid:grin-tongue-wink",
	});
}

export default Component;
