import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3k8zedlj.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3k8zedlj"/>`,
		"fallback": "foundation:die-six",
	});
}

export default Component;
