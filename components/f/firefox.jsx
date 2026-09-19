import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqalf3b1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqalf3b1w"/>`,
		"fallback": "fa6-brands:firefox",
	});
}

export default Component;
