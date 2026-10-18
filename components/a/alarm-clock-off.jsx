import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca5_w8bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca5_w8bkb"/>`,
		"fallback": "vadivam:alarm-clock-off",
	});
}

export default Component;
