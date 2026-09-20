import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbm6x22ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbm6x22ry"/>`,
		"fallback": "reicon:bezier-filled",
	});
}

export default Component;
