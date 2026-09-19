import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1s786g6g.css';
import '../../css/q/ql0g54bag.css';
import '../../css/a/ar__gdbwn.css';
import '../../css/g/gkts6gb_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r1s786g6g"/><circle class="ql0g54bag"/><path class="ar__gdbwn"/><path class="gkts6gb_a"/>`,
		"fallback": "carbon:ibm-dynamic-route-server",
	});
}

export default Component;
