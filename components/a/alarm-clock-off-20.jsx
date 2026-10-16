import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9aiyrfai.css';
import '../../css/t/tubi0bbkz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9aiyrfai"/><path class="tubi0bbkz"/>`,
		"fallback": "energy-icons:alarm-clock-off-20",
	});
}

export default Component;
