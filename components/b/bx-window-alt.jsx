import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umrv9kb7n.css';
import '../../css/q/qx05z4bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umrv9kb7n"/><path class="qx05z4bvk"/>`,
		"fallback": "bx:bx-window-alt",
	});
}

export default Component;
