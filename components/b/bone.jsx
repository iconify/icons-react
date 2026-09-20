import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3rux0b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3rux0b5b"/>`,
		"fallback": "mdi:bone",
	});
}

export default Component;
