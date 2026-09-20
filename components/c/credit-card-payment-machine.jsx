import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zmv--acbl.css';
import '../../css/g/gxja5qb7o.css';
import '../../css/q/qmdrytbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zmv--acbl"/><path class="gxja5qb7o"/><path class="qmdrytbnq"/></g>`,
		"fallback": "streamline-cyber:credit-card-payment-machine",
	});
}

export default Component;
