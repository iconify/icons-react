import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3f-3twlt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3f-3twlt"/>`,
		"fallback": "dinkie-icons:abacus",
	});
}

export default Component;
