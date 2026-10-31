import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ymmdjbbac.css';
import '../../css/c/codnblbpf.css';
import '../../css/c/cw4b7wb_u.css';
import '../../css/y/yu-mbdbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ymmdjbbac"/><path class="codnblbpf wm-shadow"/><path class="cw4b7wb_u"/><path class="yu-mbdbkm"/></g>`,
		"fallback": "withicons-brutal:corner-up-right",
	});
}

export default Component;
