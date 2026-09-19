import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5mnzse4d.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5mnzse4d"/>`,
		"fallback": "foundation:closed-caption",
	});
}

export default Component;
