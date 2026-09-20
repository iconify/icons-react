import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clbwdidkw.css';
import '../../css/f/fl7wf72mm.css';
import '../../css/b/bw2p-ubhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clbwdidkw"/><path class="fl7wf72mm"/><path class="bw2p-ubhh"/></g>`,
		"fallback": "tdesign:chart-combo",
	});
}

export default Component;
