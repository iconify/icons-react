import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cobnmoblu.css';
import '../../css/x/xg215c6-w.css';
import '../../css/c/ctuu02cyd.css';
import '../../css/r/r8o_n9bgn.css';
import '../../css/u/ult9n1bre.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="cobnmoblu"/><path clip-rule="evenodd" class="xg215c6-w"/><path clip-rule="evenodd" class="ctuu02cyd"/></g><path clip-rule="evenodd" class="r8o_n9bgn"/><path clip-rule="evenodd" class="ult9n1bre"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:bulletin-notice-off",
	});
}

export default Component;
