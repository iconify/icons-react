import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-ansi1om.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-ansi1om"/>`,
		"fallback": "maki:hardware-11",
	});
}

export default Component;
