import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukupz7-sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukupz7-sz"/>`,
		"fallback": "bx:bxs-wink-smile",
	});
}

export default Component;
