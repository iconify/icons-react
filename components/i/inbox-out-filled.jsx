import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxjo86bzj.css';
import '../../css/g/gsx79b0zp.css';
import '../../css/c/c2kux8r3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zxjo86bzj"/><path class="gsx79b0zp"/><path class="c2kux8r3g"/></g>`,
		"fallback": "reicon:inbox-out-filled",
	});
}

export default Component;
