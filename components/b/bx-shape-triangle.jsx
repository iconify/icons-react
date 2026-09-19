import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u79ntacah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u79ntacah"/>`,
		"fallback": "bx:bx-shape-triangle",
	});
}

export default Component;
