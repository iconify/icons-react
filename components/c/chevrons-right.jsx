import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lbb14rb-b.css';
import '../../css/p/pgd0f0b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="lbb14rb-b"/><path class="pgd0f0b4x"/></g>`,
		"fallback": "matita:chevrons-right",
	});
}

export default Component;
