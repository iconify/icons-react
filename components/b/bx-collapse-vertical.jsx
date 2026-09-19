import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfefa3byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfefa3byq"/>`,
		"fallback": "bx:bx-collapse-vertical",
	});
}

export default Component;
