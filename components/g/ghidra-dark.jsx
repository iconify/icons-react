import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8lutftsu.css';
import '../../css/o/oz-ecrdze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8lutftsu"/><path class="oz-ecrdze"/>`,
		"fallback": "selfhst:ghidra-dark",
	});
}

export default Component;
