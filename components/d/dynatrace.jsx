import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1iq1p1eb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1iq1p1eb"/>`,
		"fallback": "devicon-plain:dynatrace",
	});
}

export default Component;
