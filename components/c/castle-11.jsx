import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn3et2b_d.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn3et2b_d"/>`,
		"fallback": "maki:castle-11",
	});
}

export default Component;
