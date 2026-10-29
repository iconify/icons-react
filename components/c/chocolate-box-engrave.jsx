import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x94o6ubtk.css';
import '../../css/w/w7s5zj_4h.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/s/s5fsn4tdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x94o6ubtk"/><path class="w7s5zj_4h wm-a"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb wm-k"/><path class="s5fsn4tdx wm-a"/></g>`,
		"fallback": "withicons:chocolate-box-engrave",
	});
}

export default Component;
