import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht-nwvn7e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht-nwvn7e"/>`,
		"fallback": "pinhead:banana-and-apple",
	});
}

export default Component;
