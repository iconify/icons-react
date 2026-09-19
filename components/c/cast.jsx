import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tquyp2c9p.css';
import '../../css/f/fd9f55byh.css';
import '../../css/c/cui1j9-yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tquyp2c9p"/><path class="fd9f55byh"/><path class="cui1j9-yi"/>`,
		"fallback": "cil:cast",
	});
}

export default Component;
