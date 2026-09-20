import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roudr1b6k.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roudr1b6k"/>`,
		"fallback": "maki:cross-11",
	});
}

export default Component;
