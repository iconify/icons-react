import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvsna5bbi.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvsna5bbi"/>`,
		"fallback": "fa6-brands:ethereum",
	});
}

export default Component;
