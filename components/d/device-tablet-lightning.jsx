import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kb12b0vth.css';
import '../../css/t/thk5b3bcx.css';
import '../../css/f/fb6kjxo-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kb12b0vth"/><path class="thk5b3bcx"/><path class="fb6kjxo-e"/></g>`,
		"fallback": "andrsrxn:device-tablet-lightning",
	});
}

export default Component;
