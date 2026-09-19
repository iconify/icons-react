import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yly7_1ytk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yly7_1ytk"/>`,
		"fallback": "fa6-solid:comment-dollar",
	});
}

export default Component;
