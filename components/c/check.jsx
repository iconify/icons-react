import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp1qsbb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp1qsbb8q"/>`,
		"fallback": "noviair-light:check",
	});
}

export default Component;
