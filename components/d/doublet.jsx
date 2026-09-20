import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5k1i-lbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5k1i-lbz"/>`,
		"fallback": "ix:doublet",
	});
}

export default Component;
