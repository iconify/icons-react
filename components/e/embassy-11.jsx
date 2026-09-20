import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwnm_cc8c.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwnm_cc8c"/>`,
		"fallback": "maki:embassy-11",
	});
}

export default Component;
