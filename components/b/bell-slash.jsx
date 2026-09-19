import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpqi2ybyk.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpqi2ybyk"/>`,
		"fallback": "fa6-regular:bell-slash",
	});
}

export default Component;
