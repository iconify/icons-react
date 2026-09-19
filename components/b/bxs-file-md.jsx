import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4zbgebyk.css';
import '../../css/b/bb6-y3inu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4zbgebyk"/><path class="bb6-y3inu"/>`,
		"fallback": "bx:bxs-file-md",
	});
}

export default Component;
