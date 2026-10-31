import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z-jqc1b6a.css';
import '../../css/k/kg2ec3mul.css';
import '../../css/m/mmtujrbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k z-jqc1b6a"/><path class="kg2ec3mul wm-a"/><path class="mmtujrbet wm-deco"/></g>`,
		"fallback": "withicons-kawaii:arrow-right-to-line",
	});
}

export default Component;
