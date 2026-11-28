import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3y0r1y_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3y0r1y_n"/>`,
		"fallback": "noviair-light:database-question",
	});
}

export default Component;
