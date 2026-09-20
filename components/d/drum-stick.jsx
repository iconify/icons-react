import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bxx7e7o4e.css';
import '../../css/l/l36e_zb9c.css';
import '../../css/b/bi1vd9t4u.css';
import '../../css/y/yzaaxlb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bxx7e7o4e"/><path class="l36e_zb9c"/><path class="bi1vd9t4u"/><path class="yzaaxlb_q"/></g>`,
		"fallback": "streamline-sharp-color:drum-stick",
	});
}

export default Component;
