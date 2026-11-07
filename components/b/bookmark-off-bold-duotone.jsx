import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfg33ubfc.css';
import '../../css/p/pjltp9b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfg33ubfc"/><path class="pjltp9b6o"/>`,
		"fallback": "solar:bookmark-off-bold-duotone",
	});
}

export default Component;
