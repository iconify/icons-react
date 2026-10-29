import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wlfqr6a4i.css';
import '../../css/i/i8ycrbbjm.css';
import '../../css/m/m3mtucxsw.css';
import '../../css/c/cw36_6mco.css';
import '../../css/l/lw3ir5-go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wlfqr6a4i wm-k"/><path class="i8ycrbbjm wm-a"/><path class="m3mtucxsw wm-shadow"/><path class="cw36_6mco wm-a"/><path class="lw3ir5-go wm-k"/></g>`,
		"fallback": "withicons:chart-scatter-engrave",
	});
}

export default Component;
