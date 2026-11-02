import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbenr3bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbenr3bsb"/>`,
		"fallback": "mingcute:inspect-fill",
	});
}

export default Component;
