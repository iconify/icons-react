import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrgp7_b9e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrgp7_b9e"/>`,
		"fallback": "temaki:camper-trailer",
	});
}

export default Component;
