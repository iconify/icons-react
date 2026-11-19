import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwt341hlt.css';
import '../../css/r/r1t_886tx.css';
import '../../css/q/qizi-c8yi.css';
import '../../css/b/bs9mhcbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwt341hlt"/><circle class="r1t_886tx"/><path class="qizi-c8yi"/><path class="bs9mhcbzn"/></g>`,
		"fallback": "andrsrxn:field-mail",
	});
}

export default Component;
