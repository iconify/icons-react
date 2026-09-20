import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxlq8b69v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxlq8b69v"/>`,
		"fallback": "mynaui:clock-12",
	});
}

export default Component;
