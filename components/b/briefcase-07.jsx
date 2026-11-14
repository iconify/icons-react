import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtaxddpol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtaxddpol"/>`,
		"fallback": "hugeicons:briefcase-07",
	});
}

export default Component;
