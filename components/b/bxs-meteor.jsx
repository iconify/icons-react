import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qet9msrbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qet9msrbi"/>`,
		"fallback": "bx:bxs-meteor",
	});
}

export default Component;
