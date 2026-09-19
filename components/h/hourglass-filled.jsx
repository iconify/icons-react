import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dozf3_b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dozf3_b2g"/>`,
		"fallback": "griddy-icons:hourglass-filled",
	});
}

export default Component;
