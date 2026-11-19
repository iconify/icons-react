import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/c/ck5-jipqk.css';
import '../../css/t/t1qs0yb0r.css';
import '../../css/f/fwufnxlre.css';
import '../../css/w/wguqkdb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="ck5-jipqk"/><path class="t1qs0yb0r"/><path class="fwufnxlre"/><path class="wguqkdb2n"/></g>`,
		"fallback": "andrsrxn:calendar-droplet",
	});
}

export default Component;
