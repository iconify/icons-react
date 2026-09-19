import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ae35b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ae35b4y"/>`,
		"fallback": "iconoir:filter",
	});
}

export default Component;
