import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzua2_eda.css';
import '../../css/h/htcmevx-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzua2_eda"/><path class="htcmevx-r"/></g>`,
		"fallback": "coolicons:desktop-duotone-round",
	});
}

export default Component;
