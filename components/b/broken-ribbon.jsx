import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcindvmem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcindvmem"/>`,
		"fallback": "game-icons:broken-ribbon",
	});
}

export default Component;
