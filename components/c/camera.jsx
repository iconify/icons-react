import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0rquab4m.css';
import '../../css/c/cxnnz0b1p.css';
import '../../css/s/s353xd64o.css';
import '../../css/z/z-itscb-x.css';
import '../../css/c/crgxpcbmq.css';
import '../../css/h/hr6_0tnzh.css';
import '../../css/r/r-mdnlbql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0rquab4m"/><path class="cxnnz0b1p"/><path class="s353xd64o"/><circle class="z-itscb-x"/><circle class="crgxpcbmq"/><path class="hr6_0tnzh"/><ellipse class="r-mdnlbql"/>`,
		"fallback": "flat-color-icons:camera",
	});
}

export default Component;
