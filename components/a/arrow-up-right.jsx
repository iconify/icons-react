import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydjka0b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydjka0b7h"/>`,
		"fallback": "reicon:arrow-up-right",
	});
}

export default Component;
