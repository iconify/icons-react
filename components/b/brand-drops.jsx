import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yf5fbwbbr.css';
import '../../css/f/f-_jwwbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yf5fbwbbr"/><path class="f-_jwwbfy"/></g>`,
		"fallback": "tabler:brand-drops",
	});
}

export default Component;
