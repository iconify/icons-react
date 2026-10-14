import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w79h7j-7v.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w79h7j-7v"/>`,
		"fallback": "thesvg-color:earmark-light",
	});
}

export default Component;
