import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy8l_xb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uy8l_xb6l"/>`,
		"fallback": "iconoir:credit-card-solid",
	});
}

export default Component;
