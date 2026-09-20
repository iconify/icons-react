import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d71j6bs8z.css';

const viewBox = {"width":21.065,"height":31.99,"left":0.005};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d71j6bs8z ingov-blue"/>`,
		"fallback": "thesvg:inprs",
	});
}

export default Component;
