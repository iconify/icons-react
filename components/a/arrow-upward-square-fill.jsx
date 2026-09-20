import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnoo_kb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cnoo_kb4x"/>`,
		"fallback": "si:arrow-upward-square-fill",
	});
}

export default Component;
