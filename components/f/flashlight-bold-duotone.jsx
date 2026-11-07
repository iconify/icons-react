import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tkmm4m1rs.css';
import '../../css/i/izgpa7bgk.css';
import '../../css/x/x07yrh8hm.css';
import '../../css/o/obe4s4bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="tkmm4m1rs"/><path class="izgpa7bgk"/></g><path class="x07yrh8hm"/><path class="obe4s4bsn"/>`,
		"fallback": "solar:flashlight-bold-duotone",
	});
}

export default Component;
