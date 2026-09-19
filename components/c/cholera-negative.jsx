import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xq_8t15fs.css';
import '../../css/h/htn3cj9qd.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCholeraNegative0)" class="cuyn6tgcc"><path class="xq_8t15fs"/><path clip-rule="evenodd" class="htn3cj9qd"/></g><defs><clipPath id="healthiconsCholeraNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:cholera-negative",
	});
}

export default Component;
