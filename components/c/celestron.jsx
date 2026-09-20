import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fin3fg2wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fin3fg2wp"/>`,
		"fallback": "thesvg:celestron",
	});
}

export default Component;
