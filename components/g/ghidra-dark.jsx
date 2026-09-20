import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhmw-kb7l.css';
import '../../css/i/i2b0w4dly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhmw-kb7l"/><path class="i2b0w4dly"/>`,
		"fallback": "selfhst:ghidra-dark",
	});
}

export default Component;
