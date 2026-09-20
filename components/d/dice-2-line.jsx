import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo1y_5kgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo1y_5kgv"/>`,
		"fallback": "ri:dice-2-line",
	});
}

export default Component;
