import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulw8nvupj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulw8nvupj"/>`,
		"fallback": "mdi:hand-pointing-left",
	});
}

export default Component;
