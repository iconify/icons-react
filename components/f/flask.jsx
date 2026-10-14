import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mmhfqtz0e.css';
import '../../css/w/w4rw20y0k.css';
import '../../css/i/ijue4lwmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mmhfqtz0e"/><path class="w4rw20y0k"/><path class="ijue4lwmp"/></g>`,
		"fallback": "matita:flask",
	});
}

export default Component;
