import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd9pjzbag.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd9pjzbag"/>`,
		"fallback": "pinhead:e-wide-with-arrow-right",
	});
}

export default Component;
