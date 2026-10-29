import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wj-_vp29w.css';
import '../../css/w/wrmxp3bja.css';
import '../../css/e/eug742r3l.css';
import '../../css/w/wabd8kb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wj-_vp29w wm-k"/><path class="wm-shadow wrmxp3bja"/><path class="eug742r3l wm-k"/><path class="wabd8kb8q wm-a"/></g>`,
		"fallback": "withicons:citrus-engrave",
	});
}

export default Component;
