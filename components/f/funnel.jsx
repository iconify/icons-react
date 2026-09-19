import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp939ybwv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp939ybwv"/>`,
		"fallback": "entypo:funnel",
	});
}

export default Component;
