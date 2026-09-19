import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_nr1-bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_nr1-bqr"/>`,
		"fallback": "bx:bxs-widget",
	});
}

export default Component;
