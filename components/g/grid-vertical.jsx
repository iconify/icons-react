import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbeiz5roj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbeiz5roj"/>`,
		"fallback": "bx:grid-vertical",
	});
}

export default Component;
