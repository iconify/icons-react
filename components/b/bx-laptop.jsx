import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkox85bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkox85bod"/>`,
		"fallback": "bx:bx-laptop",
	});
}

export default Component;
