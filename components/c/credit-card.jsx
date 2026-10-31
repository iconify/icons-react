import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hhcy4dbss.css';
import '../../css/q/qlmtzdbtu.css';
import '../../css/t/t_ndapeid.css';
import '../../css/e/ex-7uccti.css';
import '../../css/m/mikouibnu.css';
import '../../css/d/dqov3e59a.css';
import '../../css/f/flmt_4ich.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hhcy4dbss"/><path class="qlmtzdbtu"/><path class="t_ndapeid wm-shine"/><path class="ex-7uccti wm-k"/><path class="mikouibnu wm-a"/><path class="dqov3e59a"/><path class="flmt_4ich"/></g>`,
		"fallback": "withicons-kawaii:credit-card",
	});
}

export default Component;
