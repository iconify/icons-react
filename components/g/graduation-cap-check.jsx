import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooa4c13xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooa4c13xh"/>`,
		"fallback": "noviair-light:graduation-cap-check",
	});
}

export default Component;
