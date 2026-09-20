import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq3--h1on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq3--h1on"/>`,
		"fallback": "mingcute:cellphone-2-horizontal-fill",
	});
}

export default Component;
