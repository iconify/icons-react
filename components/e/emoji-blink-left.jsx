import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tvo3ulbme.css';
import '../../css/x/xpwwbpbtk.css';
import '../../css/e/efsv_hb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tvo3ulbme"/><path class="xpwwbpbtk"/><path class="efsv_hb2f"/></g>`,
		"fallback": "iconoir:emoji-blink-left",
	});
}

export default Component;
