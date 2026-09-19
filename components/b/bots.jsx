import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_xa_hmlg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_xa_hmlg"/>`,
		"fallback": "fa7-brands:bots",
	});
}

export default Component;
