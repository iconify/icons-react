import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0srfx45m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0srfx45m"/>`,
		"fallback": "pinhead:airport-terminal-with-plane-takeoff",
	});
}

export default Component;
