import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9uth_b_n.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9uth_b_n"/>`,
		"fallback": "vs:8-square",
	});
}

export default Component;
