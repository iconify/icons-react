import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-t5lxbif.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-t5lxbif"/>`,
		"fallback": "pinhead:canoe-on-ramp-on-water",
	});
}

export default Component;
