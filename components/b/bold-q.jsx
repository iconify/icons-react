import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv2u-nbua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv2u-nbua"/>`,
		"fallback": "ooui:bold-q",
	});
}

export default Component;
