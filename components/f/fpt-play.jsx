import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evbg5bcoz.css';

const viewBox = {"width":279.62,"height":279.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evbg5bcoz"/>`,
		"fallback": "thesvg-color:fpt-play",
	});
}

export default Component;
