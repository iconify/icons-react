import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm6wcbchz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm6wcbchz"/>`,
		"fallback": "mdi:hours-12",
	});
}

export default Component;
