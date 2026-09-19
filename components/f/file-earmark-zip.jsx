import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bd_jtpbsv.css';
import '../../css/t/tcbm999qn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bd_jtpbsv"/><path class="tcbm999qn"/></g>`,
		"fallback": "bi:file-earmark-zip",
	});
}

export default Component;
