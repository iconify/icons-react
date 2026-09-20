import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uty38ab5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uty38ab5q"/>`,
		"fallback": "streamline-sharp:3d-move",
	});
}

export default Component;
