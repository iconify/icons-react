import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8_j6bi8s.css';
import '../../css/x/xog4l_bot.css';
import '../../css/u/u4dv3ccik.css';
import '../../css/s/sxsoh6g_x.css';
import '../../css/c/c00v55b_s.css';
import '../../css/w/wit_08b3d.css';
import '../../css/e/esri2wb-a.css';
import '../../css/k/kqrq1tbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8_j6bi8s wm-shadow"/><path class="xog4l_bot"/><path class="u4dv3ccik"/><path class="sxsoh6g_x"/><path class="c00v55b_s"/><path class="wit_08b3d wm-shine"/><path class="esri2wb-a"/><path class="kqrq1tbpn"/>`,
		"fallback": "withicons-plush:candy",
	});
}

export default Component;
