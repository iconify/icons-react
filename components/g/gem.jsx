import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uj6cy7lst.css';
import '../../css/v/v54vc0bdn.css';
import '../../css/k/kdsgibcbh.css';
import '../../css/a/aksnqjb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uj6cy7lst"/><path class="v54vc0bdn"/><path class="kdsgibcbh"/><path class="aksnqjb2e"/></g>`,
		"fallback": "andrsrxn:gem",
	});
}

export default Component;
