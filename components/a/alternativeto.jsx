import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7y0-7c0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7y0-7c0d"/>`,
		"fallback": "thesvg:alternativeto",
	});
}

export default Component;
