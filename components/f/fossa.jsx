import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqzo2e_ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqzo2e_ij"/>`,
		"fallback": "simple-icons:fossa",
	});
}

export default Component;
