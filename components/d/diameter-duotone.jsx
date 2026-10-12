import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcvl_djfq.css';
import '../../css/n/nb5t14bvr.css';
import '../../css/g/gnz_7xmuq.css';
import '../../css/e/ese591b3y.css';
import '../../css/p/pd8qf7bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zcvl_djfq"/><path class="nb5t14bvr"/><path class="gnz_7xmuq"/><path class="ese591b3y"/><path class="pd8qf7bfm"/></g>`,
		"fallback": "lucide-extended:diameter-duotone",
	});
}

export default Component;
