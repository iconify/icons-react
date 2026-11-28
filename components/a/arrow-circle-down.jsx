import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d85rrob6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d85rrob6c"/>`,
		"fallback": "noviair:arrow-circle-down",
	});
}

export default Component;
