import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uzcv14ctn.css';
import '../../css/i/i0vw5hlyl.css';
import '../../css/j/j6egxdb-x.css';
import '../../css/f/flbsvpbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uzcv14ctn"/><path class="i0vw5hlyl wm-shine"/><path class="j6egxdb-x wm-k"/><path class="flbsvpbyj wm-a"/></g>`,
		"fallback": "withicons-kawaii:chart-funnel",
	});
}

export default Component;
