import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2lb21bmw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2lb21bmw"/>`,
		"fallback": "devicon-plain:eslint-wordmark",
	});
}

export default Component;
