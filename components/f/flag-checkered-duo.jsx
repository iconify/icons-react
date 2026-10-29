import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vwx_dcpll.css';
import '../../css/v/vs3_2yq5q.css';
import '../../css/z/zbms0lbwh.css';
import '../../css/e/ea_szbbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vwx_dcpll"/><path class="vs3_2yq5q wm-a"/><path class="zbms0lbwh"/><path class="ea_szbbks"/></g>`,
		"fallback": "withicons:flag-checkered-duo",
	});
}

export default Component;
