import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w18srrtlx.css';
import '../../css/c/ctau3x_xj.css';
import '../../css/h/h10ay8v4y.css';
import '../../css/i/iqg85keyw.css';
import '../../css/k/k2jm9_qyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w18srrtlx wm-k"/><path class="ctau3x_xj wm-a"/><path class="h10ay8v4y wm-shadow"/><path class="iqg85keyw wm-k"/><path class="k2jm9_qyv wm-a"/></g>`,
		"fallback": "withicons:chart-gantt-engrave",
	});
}

export default Component;
