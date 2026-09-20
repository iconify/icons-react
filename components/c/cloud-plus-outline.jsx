import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzw-b8bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzw-b8bud"/>`,
		"fallback": "solar:cloud-plus-outline",
	});
}

export default Component;
