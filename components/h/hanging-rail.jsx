import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn3_w6buo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn3_w6buo"/>`,
		"fallback": "temaki:hanging-rail",
	});
}

export default Component;
