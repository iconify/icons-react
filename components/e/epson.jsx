import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leuna0b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leuna0b1i"/>`,
		"fallback": "thesvg-color:epson",
	});
}

export default Component;
