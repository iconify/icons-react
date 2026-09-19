import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0x58r32v.css';

const viewBox = {"width":1025,"height":703};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0x58r32v"/>`,
		"fallback": "whh:blackberry",
	});
}

export default Component;
