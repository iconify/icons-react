import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjah9mb2h.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjah9mb2h"/>`,
		"fallback": "el:filter",
	});
}

export default Component;
