import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp1sjjb2d.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp1sjjb2d"/>`,
		"fallback": "foundation:arrow-down",
	});
}

export default Component;
