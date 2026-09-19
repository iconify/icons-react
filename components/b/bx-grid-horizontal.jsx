import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltcixubdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltcixubdr"/>`,
		"fallback": "bx:bx-grid-horizontal",
	});
}

export default Component;
