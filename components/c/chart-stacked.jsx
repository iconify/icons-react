import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1lh69b9o.css';
import '../../css/j/jzanc6bsn.css';
import '../../css/b/bw2p-ubhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1lh69b9o"/><path class="jzanc6bsn"/><path class="bw2p-ubhh"/></g>`,
		"fallback": "tdesign:chart-stacked",
	});
}

export default Component;
