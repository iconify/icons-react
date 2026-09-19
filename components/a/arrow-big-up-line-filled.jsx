import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5ca-63n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh5ca-63n"/>`,
		"fallback": "boxicons:arrow-big-up-line-filled",
	});
}

export default Component;
