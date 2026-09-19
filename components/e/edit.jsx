import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y79khql4u.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y79khql4u"/>`,
		"fallback": "el:edit",
	});
}

export default Component;
