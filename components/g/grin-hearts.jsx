import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox2vwfbfi.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox2vwfbfi"/>`,
		"fallback": "fa-regular:grin-hearts",
	});
}

export default Component;
