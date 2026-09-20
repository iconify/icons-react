import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km3_h9but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km3_h9but"/>`,
		"fallback": "thesvg-color:date-fns",
	});
}

export default Component;
