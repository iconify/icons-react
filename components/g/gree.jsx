import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6i8h_b-a.css';

const viewBox = {"width":618,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6i8h_b-a"/>`,
		"fallback": "ls:gree",
	});
}

export default Component;
