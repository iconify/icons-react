import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpxo5wbuf.css';
import '../../css/s/s7thl-blk.css';
import '../../css/h/h88n45bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jpxo5wbuf"/><path class="s7thl-blk"/><path class="h88n45bfw"/></g>`,
		"fallback": "andrsrxn:castle",
	});
}

export default Component;
