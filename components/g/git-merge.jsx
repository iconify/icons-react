import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te_k_zb4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te_k_zb4r"/>`,
		"fallback": "famicons:git-merge",
	});
}

export default Component;
