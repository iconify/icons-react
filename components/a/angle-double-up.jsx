import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtt7l7bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtt7l7bvd"/>`,
		"fallback": "uis:angle-double-up",
	});
}

export default Component;
