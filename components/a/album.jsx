import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t91s7oy2f.css';
import '../../css/w/w7en3fx7q.css';
import '../../css/a/axk22gbap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t91s7oy2f"/><path class="w7en3fx7q"/><path class="axk22gbap"/>`,
		"fallback": "cil:album",
	});
}

export default Component;
