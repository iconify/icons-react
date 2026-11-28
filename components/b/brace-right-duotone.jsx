import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv4w3pb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zv4w3pb_a"/>`,
		"fallback": "iconaut:brace-right-duotone",
	});
}

export default Component;
