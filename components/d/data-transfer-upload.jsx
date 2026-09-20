import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl0y-5bdj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl0y-5bdj"/>`,
		"fallback": "oi:data-transfer-upload",
	});
}

export default Component;
