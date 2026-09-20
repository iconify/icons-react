import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqd_l2b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqd_l2b4r"/>`,
		"fallback": "mi:caret-left",
	});
}

export default Component;
