import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaxmokbbl.css';
import '../../css/u/uh_iprkea.css';
import '../../css/s/s-e8fnbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zaxmokbbl"/><path class="uh_iprkea"/><path class="s-e8fnbaj"/></g>`,
		"fallback": "andrsrxn:egg-fried",
	});
}

export default Component;
