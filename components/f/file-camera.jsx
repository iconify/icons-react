import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5v_u-btx.css';
import '../../css/w/wm9fzx3qi.css';
import '../../css/m/mjd6iy50w.css';
import '../../css/j/j9ks1ebww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5v_u-btx"/><path class="wm9fzx3qi"/><path class="mjd6iy50w"/><circle class="j9ks1ebww"/></g>`,
		"fallback": "andrsrxn:file-camera",
	});
}

export default Component;
