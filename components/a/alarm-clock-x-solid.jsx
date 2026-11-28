import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmeug5b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmeug5b0h"/>`,
		"fallback": "iconaut:alarm-clock-x-solid",
	});
}

export default Component;
