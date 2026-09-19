import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0_a_7k0f.css';
import '../../css/w/wk4cq8krv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0_a_7k0f"/><path class="wk4cq8krv"/>`,
		"fallback": "ion:at-circle-sharp",
	});
}

export default Component;
