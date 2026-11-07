import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7uoogagy.css';
import '../../css/p/pwof45wsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7uoogagy"/><path class="pwof45wsf"/>`,
		"fallback": "solar:heart-angle-bold-duotone",
	});
}

export default Component;
