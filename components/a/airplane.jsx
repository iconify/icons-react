import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0zvjwo1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0zvjwo1g"/>`,
		"fallback": "famicons:airplane",
	});
}

export default Component;
