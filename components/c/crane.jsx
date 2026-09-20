import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydd2y3hhj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydd2y3hhj"/>`,
		"fallback": "temaki:crane",
	});
}

export default Component;
