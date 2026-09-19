import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojm54hbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojm54hbvk"/>`,
		"fallback": "bx:bxs-exit",
	});
}

export default Component;
