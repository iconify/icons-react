import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl9-2dg7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl9-2dg7c"/>`,
		"fallback": "noviair:id-card-check",
	});
}

export default Component;
