import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8lwlo6og.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8lwlo6og"/>`,
		"fallback": "devicon-plain:adminer",
	});
}

export default Component;
