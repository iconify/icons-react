import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6axgjb8x.css';
import '../../css/l/liv05r6py.css';
import '../../css/i/ixfxt7b7m.css';
import '../../css/t/tbrv3_bcp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6axgjb8x"/><path class="liv05r6py"/><path class="ixfxt7b7m"/><path class="tbrv3_bcp"/></g>`,
		"fallback": "streamline-color:code-monitor-1",
	});
}

export default Component;
