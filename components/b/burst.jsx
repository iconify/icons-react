import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0i0_d7-r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0i0_d7-r"/>`,
		"fallback": "foundation:burst",
	});
}

export default Component;
