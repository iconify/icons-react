import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0176zb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0176zb8t"/>`,
		"fallback": "bxs:circle-three-quarter",
	});
}

export default Component;
