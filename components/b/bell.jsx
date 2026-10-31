import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/j9yl3cc4a.css';
import '../../css/t/tqx1j3bwv.css';
import '../../css/p/pife0lb_o.css';
import '../../css/r/rztsc3bpw.css';
import '../../css/s/shte9bcuj.css';
import '../../css/i/i5r8li2eq.css';
import '../../css/f/fhqy0cywu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="j9yl3cc4a"/><path class="tqx1j3bwv"/><path class="pife0lb_o wm-shine"/><path class="rztsc3bpw wm-k"/><path class="shte9bcuj wm-a"/><path class="i5r8li2eq"/><path class="fhqy0cywu"/></g>`,
		"fallback": "withicons-kawaii:bell",
	});
}

export default Component;
