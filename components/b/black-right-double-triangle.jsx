import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z02_g1b5r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z02_g1b5r"/>`,
		"fallback": "dinkie-icons:black-right-double-triangle",
	});
}

export default Component;
