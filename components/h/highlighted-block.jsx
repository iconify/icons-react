import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9azt2ycm.css';
import '../../css/z/z13jkwbug.css';
import '../../css/u/uenwpkvfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9azt2ycm"/><path class="z13jkwbug"/><path class="uenwpkvfu"/></g>`,
		"fallback": "tdesign:highlighted-block",
	});
}

export default Component;
