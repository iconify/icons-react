import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w69pz5srx.css';
import '../../css/y/y9rua-zqa.css';
import '../../css/q/qu9fsbcko.css';
import '../../css/w/wjqc_6z_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w69pz5srx"/><path class="y9rua-zqa"/><path class="qu9fsbcko"/><path class="wjqc_6z_x"/></g>`,
		"fallback": "andrsrxn:film-warning",
	});
}

export default Component;
