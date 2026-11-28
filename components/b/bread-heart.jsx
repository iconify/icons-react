import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea242b_ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea242b_ej"/>`,
		"fallback": "noviair:bread-heart",
	});
}

export default Component;
