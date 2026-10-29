import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x5620ccgb.css';
import '../../css/t/tq95eablz.css';
import '../../css/k/kyp8c9b4m.css';
import '../../css/x/xsq1enbrq.css';
import '../../css/i/in6ng4buk.css';
import '../../css/t/t1wi4ubuy.css';
import '../../css/m/m5_kr4gbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x5620ccgb"/><circle class="tq95eablz wm-k"/><circle class="kyp8c9b4m wm-k"/><circle class="wm-k xsq1enbrq"/><circle class="in6ng4buk wm-k"/><circle class="t1wi4ubuy wm-k"/><circle class="m5_kr4gbb wm-k"/></g>`,
		"fallback": "withicons:drag-handle-blueprint",
	});
}

export default Component;
