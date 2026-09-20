import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh8z_vbwu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh8z_vbwu"/>`,
		"fallback": "pinhead:fork",
	});
}

export default Component;
