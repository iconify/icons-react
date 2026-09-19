import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy-5eub4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uy-5eub4v"/>`,
		"fallback": "akar-icons:circle-x-fill",
	});
}

export default Component;
