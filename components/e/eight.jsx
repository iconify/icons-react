import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpi6zv55o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpi6zv55o"/>`,
		"fallback": "mynaui:eight",
	});
}

export default Component;
