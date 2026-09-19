import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfo-7vb2n.css';
import '../../css/t/tcdvgs_6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfo-7vb2n"/><path class="tcdvgs_6r"/>`,
		"fallback": "cil:blind",
	});
}

export default Component;
