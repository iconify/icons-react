import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3c9r13lv.css';
import '../../css/c/c3ybubb2x.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/k/kblnw7b8r.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y3c9r13lv"/><path class="c3ybubb2x wm-shine"/><path class="uh01hzbyb wm-k"/><path class="kblnw7b8r wm-a"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:heart-crack",
	});
}

export default Component;
