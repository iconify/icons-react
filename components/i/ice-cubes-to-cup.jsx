import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ozwbchj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ozwbchj"/>`,
		"fallback": "pinhead:ice-cubes-to-cup",
	});
}

export default Component;
