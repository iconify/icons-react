import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxvas6dtn.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/s/skbjqubnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxvas6dtn"/><path class="tm0ea5ulw"/><path class="skbjqubnk"/></g>`,
		"fallback": "andrsrxn:copy",
	});
}

export default Component;
