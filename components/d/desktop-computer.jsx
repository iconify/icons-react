import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byb1mccfc.css';
import '../../css/b/btlqcszfy.css';
import '../../css/g/ghnkzob7h.css';
import '../../css/h/hnaz6ibou.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/p/pgrphh0xa.css';
import '../../css/o/o1z2ubctr.css';
import '../../css/s/s4a08ig4b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byb1mccfc"/><path class="btlqcszfy"/><path class="ghnkzob7h"/><path class="hnaz6ibou"/><g class="rpvb-o6bq"><path class="pgrphh0xa"/><path class="o1z2ubctr"/><path class="s4a08ig4b"/></g>`,
		"fallback": "openmoji:desktop-computer",
	});
}

export default Component;
