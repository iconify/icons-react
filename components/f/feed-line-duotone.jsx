import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/m/mlr_qc6zc.css';
import '../../css/q/qirladu1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="mlr_qc6zc"/><path class="qirladu1q"/></g>`,
		"fallback": "solar:feed-line-duotone",
	});
}

export default Component;
