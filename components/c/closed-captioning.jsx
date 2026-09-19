import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8jdxt_7e.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8jdxt_7e"/>`,
		"fallback": "fa6-regular:closed-captioning",
	});
}

export default Component;
