import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_whbcc0v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_whbcc0v"/>`,
		"fallback": "pinhead:digital-totem-with-wifi",
	});
}

export default Component;
