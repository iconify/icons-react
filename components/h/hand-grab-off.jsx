import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/gl1k5hr6v.css';
import '../../css/m/ml6dupy2r.css';
import '../../css/k/k4t3lsbvd.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="gl1k5hr6v"/><path class="ml6dupy2r"/></g><path clip-rule="evenodd" class="k4t3lsbvd"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:hand-grab-off",
	});
}

export default Component;
