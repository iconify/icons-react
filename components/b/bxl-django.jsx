import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncg4ydbbh.css';
import '../../css/r/r2vjdgbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncg4ydbbh"/><path class="r2vjdgbir"/>`,
		"fallback": "bx:bxl-django",
	});
}

export default Component;
