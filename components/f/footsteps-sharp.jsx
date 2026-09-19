import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umpd97b1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umpd97b1n"/>`,
		"fallback": "ion:footsteps-sharp",
	});
}

export default Component;
