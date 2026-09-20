import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifx-z_4bo.css';
import '../../css/m/ml_xzhfyr.css';
import '../../css/c/crupdvbxn.css';
import '../../css/f/f417znc2o.css';
import '../../css/l/llr1_k-0r.css';
import '../../css/l/ln3bmccij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifx-z_4bo"/><path class="ml_xzhfyr"/><path class="crupdvbxn"/><path class="f417znc2o"/><path clip-rule="evenodd" class="llr1_k-0r"/><path clip-rule="evenodd" class="ln3bmccij"/></g>`,
		"fallback": "solar:eye-scan-outline",
	});
}

export default Component;
