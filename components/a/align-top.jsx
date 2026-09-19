import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evh9_l6tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evh9_l6tp"/>`,
		"fallback": "circum:align-top",
	});
}

export default Component;
