import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytx9e-bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytx9e-bxh"/>`,
		"fallback": "lucide:alarm-clock-off",
	});
}

export default Component;
