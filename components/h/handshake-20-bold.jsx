import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noq7sdh0f.css';
import '../../css/e/earracbsm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noq7sdh0f"/><path class="earracbsm"/>`,
		"fallback": "energy-icons:handshake-20-bold",
	});
}

export default Component;
