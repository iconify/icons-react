import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynpjq9bxw.css';
import '../../css/q/q6_bp8una.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynpjq9bxw"/><path class="q6_bp8una"/>`,
		"fallback": "boxicons:chess-filled",
	});
}

export default Component;
