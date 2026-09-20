import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hos4_h6il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hos4_h6il"/>`,
		"fallback": "uil:border-inner",
	});
}

export default Component;
