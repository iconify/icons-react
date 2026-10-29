import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mz969er-e.css';
import '../../css/h/h0y86pbgh.css';
import '../../css/g/g-i1yxtxz.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/e/e_2n_ybqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mz969er-e wm-k"/><path class="h0y86pbgh wm-a"/><path class="g-i1yxtxz wm-shadow"/><path class="h2-2dgnfu wm-k"/><path class="e_2n_ybqq wm-a"/></g>`,
		"fallback": "withicons:arrow-up-down-engrave",
	});
}

export default Component;
