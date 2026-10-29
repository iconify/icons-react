import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nc9fl6b0t.css';
import '../../css/k/krddiybmx.css';
import '../../css/f/fv6kukroi.css';
import '../../css/e/euj49csjz.css';
import '../../css/t/t5_54pbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nc9fl6b0t wm-k"/><path class="krddiybmx wm-a"/><path class="fv6kukroi wm-shadow"/><path class="euj49csjz wm-k"/><path class="t5_54pbtg wm-a"/></g>`,
		"fallback": "withicons:id-card-engrave",
	});
}

export default Component;
