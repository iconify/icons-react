import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_knkzbvc.css';
import '../../css/x/xcx2jwbkb.css';
import '../../css/e/ei-dabzwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_knkzbvc"/><path class="xcx2jwbkb"/><path class="ei-dabzwn"/></g>`,
		"fallback": "andrsrxn:folder-code",
	});
}

export default Component;
