import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asso8q0pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="asso8q0pr"/>`,
		"fallback": "iconamoon:arrow-right-4-square-fill",
	});
}

export default Component;
