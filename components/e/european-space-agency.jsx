import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwzl3txuc.css';
import '../../css/h/h6lz9tb0p.css';
import '../../css/g/g7lr5zb8x.css';

const viewBox = {"width":107.384,"height":38.975};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jwzl3txuc"><path class="h6lz9tb0p"/><path class="g7lr5zb8x"/></g>`,
		"fallback": "thesvg-color:european-space-agency",
	});
}

export default Component;
