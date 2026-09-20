import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmlg3s19r.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pmlg3s19r"/>`,
		"fallback": "lineicons:bold",
	});
}

export default Component;
