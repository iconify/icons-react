import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkpiz7yuq.css';
import '../../css/x/xh52_lwgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkpiz7yuq"/><path class="xh52_lwgk"/>`,
		"fallback": "bx:chevrons-up",
	});
}

export default Component;
