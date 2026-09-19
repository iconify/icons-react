import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0e3n1ckb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0e3n1ckb"/>`,
		"fallback": "si-glyph:arrow-forward",
	});
}

export default Component;
