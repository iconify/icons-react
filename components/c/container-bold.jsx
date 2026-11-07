import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwdr8__0e.css';
import '../../css/x/xkhbux-bb.css';
import '../../css/d/dk28xybqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwdr8__0e"/><path clip-rule="evenodd" class="xkhbux-bb"/><path class="dk28xybqr"/>`,
		"fallback": "solar:container-bold",
	});
}

export default Component;
