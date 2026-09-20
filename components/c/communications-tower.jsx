import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-pxf5beu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-pxf5beu"/>`,
		"fallback": "maki:communications-tower",
	});
}

export default Component;
