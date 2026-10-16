import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c26r66vgs.css';
import '../../css/b/blmc29b5u.css';
import '../../css/y/y29isbbma.css';
import '../../css/s/s_uiisrjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c26r66vgs"/><path class="blmc29b5u"/><path class="y29isbbma"/><path class="s_uiisrjo"/></g>`,
		"fallback": "andrsrxn:diploma",
	});
}

export default Component;
