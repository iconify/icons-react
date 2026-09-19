import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji6d9equt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ji6d9equt"/>`,
		"fallback": "ion:binoculars-sharp",
	});
}

export default Component;
