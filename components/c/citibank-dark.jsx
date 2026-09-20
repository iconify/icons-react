import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj3p5qbww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj3p5qbww"/>`,
		"fallback": "selfhst:citibank-dark",
	});
}

export default Component;
