import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oc9_ggpyl.css';
import '../../css/x/x48ztfbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oc9_ggpyl"/><path class="x48ztfbzy"/></g>`,
		"fallback": "tabler:egg-cracked",
	});
}

export default Component;
