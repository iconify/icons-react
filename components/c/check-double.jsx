import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trq7glk2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trq7glk2x"/>`,
		"fallback": "fa-solid:check-double",
	});
}

export default Component;
