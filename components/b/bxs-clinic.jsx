import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr0bdwb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr0bdwb9k"/>`,
		"fallback": "bx:bxs-clinic",
	});
}

export default Component;
