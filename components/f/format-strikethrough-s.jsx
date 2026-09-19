import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr_1osbwm.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr_1osbwm"/>`,
		"fallback": "zmdi:format-strikethrough-s",
	});
}

export default Component;
