import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1hp8hbgr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1hp8hbgr"/>`,
		"fallback": "pinhead:book-with-info-i",
	});
}

export default Component;
