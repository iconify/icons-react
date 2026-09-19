import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u8d1-xbtn.css';
import '../../css/a/a7-t3rc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u8d1-xbtn"/><path class="a7-t3rc7m"/></g>`,
		"fallback": "basil:alarm-outline",
	});
}

export default Component;
