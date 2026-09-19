import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a77l2yh7e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a77l2yh7e"/>`,
		"fallback": "entypo:dots-two-horizontal",
	});
}

export default Component;
