import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enrvvphgc.css';
import '../../css/x/xjs5b0b4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enrvvphgc"/><path class="xjs5b0b4b"/>`,
		"fallback": "ion:golf-outline",
	});
}

export default Component;
