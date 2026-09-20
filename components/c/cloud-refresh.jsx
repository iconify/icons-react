import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nj_blobin.css';
import '../../css/o/o9g3uib3g.css';
import '../../css/r/r_8wvnbmq.css';
import '../../css/y/ybwdl8vbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nj_blobin"/><path class="o9g3uib3g"/><path class="r_8wvnbmq"/><path class="ybwdl8vbw"/></g>`,
		"fallback": "streamline-color:cloud-refresh",
	});
}

export default Component;
