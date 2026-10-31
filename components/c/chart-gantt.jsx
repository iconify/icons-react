import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/napi9kbkh.css';
import '../../css/i/iqg85keyw.css';
import '../../css/d/dpp88-obh.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="napi9kbkh"/><path class="iqg85keyw wm-k"/><path class="dpp88-obh wm-a"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-gantt",
	});
}

export default Component;
