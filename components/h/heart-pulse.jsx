import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3c9r13lv.css';
import '../../css/u/uu1b7vbex.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/g/gb8znze6n.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y3c9r13lv"/><path class="uu1b7vbex wm-shine"/><path class="uh01hzbyb wm-k"/><path class="gb8znze6n wm-a"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:heart-pulse",
	});
}

export default Component;
