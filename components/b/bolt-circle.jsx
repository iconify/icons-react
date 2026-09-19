import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t91s7oy2f.css';
import '../../css/u/uti5_1b8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t91s7oy2f"/><path class="uti5_1b8s"/>`,
		"fallback": "cil:bolt-circle",
	});
}

export default Component;
