import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uwqh9mqqs.css';
import '../../css/p/pg13u4ygs.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uwqh9mqqs"/><path class="pg13u4ygs"/><path class="ei48vjbzf"/></g>`,
		"fallback": "keyline-icons:brain-circuit-fill",
	});
}

export default Component;
