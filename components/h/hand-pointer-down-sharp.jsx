import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz3n2vbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz3n2vbdp"/>`,
		"fallback": "keyline-icons:hand-pointer-down-sharp",
	});
}

export default Component;
