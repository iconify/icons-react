import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxwj6jb0z.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxwj6jb0z"/>`,
		"fallback": "fontisto:hourglass-end",
	});
}

export default Component;
