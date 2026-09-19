import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd7189rjo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd7189rjo"/>`,
		"fallback": "f7:bed-double-fill",
	});
}

export default Component;
