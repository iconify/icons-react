import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w__hynbim.css';

const viewBox = {"width":432,"height":440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w__hynbim"/>`,
		"fallback": "zmdi:dribbble",
	});
}

export default Component;
