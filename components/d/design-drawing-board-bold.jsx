import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhjwiab9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhjwiab9n"/>`,
		"fallback": "streamline-ultimate:design-drawing-board-bold",
	});
}

export default Component;
