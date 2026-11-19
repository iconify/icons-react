import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngpo85bro.css';
import '../../css/c/c0ylvub-c.css';
import '../../css/x/xo0o4nf2y.css';
import '../../css/v/vroonz3_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ngpo85bro"/><path class="c0ylvub-c"/><path class="xo0o4nf2y"/><path class="vroonz3_u"/></g>`,
		"fallback": "andrsrxn:currency-exchange",
	});
}

export default Component;
