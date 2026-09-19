import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpmawqqcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpmawqqcn"/>`,
		"fallback": "bx:bxs-cylinder",
	});
}

export default Component;
