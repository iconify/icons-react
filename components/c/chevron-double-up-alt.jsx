import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr1eulbdl.css';
import '../../css/z/z6nvbo_3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr1eulbdl"/><path class="z6nvbo_3m"/>`,
		"fallback": "cil:chevron-double-up-alt",
	});
}

export default Component;
