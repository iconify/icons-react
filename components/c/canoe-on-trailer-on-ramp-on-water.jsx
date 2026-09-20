import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx-nx6b6h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx-nx6b6h"/>`,
		"fallback": "pinhead:canoe-on-trailer-on-ramp-on-water",
	});
}

export default Component;
