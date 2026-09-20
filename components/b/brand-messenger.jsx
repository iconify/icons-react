import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yf1pmssso.css';
import '../../css/b/bd-382bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yf1pmssso"/><path class="bd-382bly"/></g>`,
		"fallback": "tabler:brand-messenger",
	});
}

export default Component;
