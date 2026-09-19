import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn9pt63aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn9pt63aj"/>`,
		"fallback": "cbi:hood-extraction",
	});
}

export default Component;
