import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb1ng5b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb1ng5b_x"/>`,
		"fallback": "thesvg-color:comma",
	});
}

export default Component;
