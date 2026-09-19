import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke91w5bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ke91w5bvx"/>`,
		"fallback": "iconamoon:arrow-up-3-square-fill",
	});
}

export default Component;
