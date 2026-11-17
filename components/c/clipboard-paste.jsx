import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n4rup5dcq.css';
import '../../css/n/nsaz_23mj.css';
import '../../css/n/ni8aw5bzd.css';
import '../../css/t/tf6vlzbmu.css';
import '../../css/g/gwceakb-m.css';
import '../../css/p/pfo4yjbuh.css';
import '../../css/j/j1r6ebbif.css';
import '../../css/l/l4q6rxbhe.css';
import '../../css/l/lzrz55b_v.css';
import '../../css/t/tzzpsmb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="n4rup5dcq"/><path class="nsaz_23mj"/><path class="ni8aw5bzd"/><path class="tf6vlzbmu"/><path class="gwceakb-m"/><path class="pfo4yjbuh"/><path class="j1r6ebbif"/><path class="l4q6rxbhe"/><path class="lzrz55b_v"/><path class="tzzpsmb_y"/></g>`,
		"fallback": "matita:clipboard-paste",
	});
}

export default Component;
