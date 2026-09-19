import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt04fab_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt04fab_f"/>`,
		"fallback": "cbi:ceiling-still",
	});
}

export default Component;
