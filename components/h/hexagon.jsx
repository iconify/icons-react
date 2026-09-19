import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc9bpyb_z.css';

const viewBox = {"width":1024,"height":897};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc9bpyb_z"/>`,
		"fallback": "whh:hexagon",
	});
}

export default Component;
