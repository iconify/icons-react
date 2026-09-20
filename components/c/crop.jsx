import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuf5-ng-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuf5-ng-e"/>`,
		"fallback": "proicons:crop",
	});
}

export default Component;
