import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1h43-bcm.css';
import '../../css/a/aaixvtbko.css';
import '../../css/b/by1fidbcn.css';
import '../../css/q/qhr0lpbrz.css';
import '../../css/t/tyu4s7bpb.css';
import '../../css/t/tevtg_2zf.css';
import '../../css/u/uc2oc0z7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d1h43-bcm"/><path class="aaixvtbko"/><path class="by1fidbcn"/><path class="qhr0lpbrz"/><path class="tyu4s7bpb"/><path class="tevtg_2zf"/><path class="uc2oc0z7o"/></g>`,
		"fallback": "iconaut:high-speed-train",
	});
}

export default Component;
