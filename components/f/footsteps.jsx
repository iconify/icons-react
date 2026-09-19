import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tje43xbgl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tje43xbgl"/>`,
		"fallback": "famicons:footsteps",
	});
}

export default Component;
