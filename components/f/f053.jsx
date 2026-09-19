import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb36hjjkh.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb36hjjkh"/>`,
		"fallback": "vs:f053",
	});
}

export default Component;
