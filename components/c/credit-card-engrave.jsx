import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vwus5_bte.css';
import '../../css/y/yyzxjob8s.css';
import '../../css/a/acri1k30f.css';
import '../../css/e/ex-7uccti.css';
import '../../css/m/mikouibnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vwus5_bte wm-k"/><path class="wm-a yyzxjob8s"/><path class="acri1k30f wm-shadow"/><path class="ex-7uccti wm-k"/><path class="mikouibnu wm-a"/></g>`,
		"fallback": "withicons:credit-card-engrave",
	});
}

export default Component;
