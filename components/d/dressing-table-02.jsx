import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mj5ud_3sd.css';
import '../../css/s/s7tmpmb_q.css';
import '../../css/k/kk_jdacyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mj5ud_3sd"/><path class="s7tmpmb_q"/><path class="kk_jdacyf"/></g>`,
		"fallback": "hugeicons:dressing-table-02",
	});
}

export default Component;
