import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upt5e3o1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upt5e3o1k"/>`,
		"fallback": "griddy-icons:align-horizontal-center-filled",
	});
}

export default Component;
