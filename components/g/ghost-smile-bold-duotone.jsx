import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rai4yqb2e.css';
import '../../css/b/bwuhri6fh.css';
import '../../css/m/msv3b6bmh.css';
import '../../css/k/khc4xk74b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rai4yqb2e"/><path class="bwuhri6fh"/><path class="msv3b6bmh"/><path class="khc4xk74b"/>`,
		"fallback": "solar:ghost-smile-bold-duotone",
	});
}

export default Component;
