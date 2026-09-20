import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/d/d61vvvu4y.css';
import '../../css/y/ykjxqgyfx.css';
import '../../css/m/m5es72bon.css';
import '../../css/g/ga10_tpmp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="d61vvvu4y"/><path class="ykjxqgyfx"/></g><path clip-rule="evenodd" class="m5es72bon"/><path class="ga10_tpmp"/></g>`,
		"fallback": "pepicons-print:exclamation-off",
	});
}

export default Component;
