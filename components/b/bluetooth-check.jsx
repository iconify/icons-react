import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t93d48h6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t93d48h6y"/>`,
		"fallback": "noviair:bluetooth-check",
	});
}

export default Component;
