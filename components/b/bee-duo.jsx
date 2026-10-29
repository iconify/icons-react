import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lyjhd5bht.css';
import '../../css/d/d4ba2wp0x.css';
import '../../css/j/j55cyc_ek.css';
import '../../css/g/gg19zmb9y.css';
import '../../css/d/d1xkg3smp.css';
import '../../css/q/qj05ho46r.css';
import '../../css/z/zxfzsfbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lyjhd5bht"/><path class="d4ba2wp0x"/><path class="j55cyc_ek wm-a"/><path class="gg19zmb9y wm-a"/><path class="d1xkg3smp"/><path class="qj05ho46r"/><path class="wm-a zxfzsfbab"/></g>`,
		"fallback": "withicons:bee-duo",
	});
}

export default Component;
