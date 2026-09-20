import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g28rmbcxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g28rmbcxv"/>`,
		"fallback": "qlementine-icons:gamepad-joystick-left-16",
	});
}

export default Component;
