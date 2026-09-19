import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/d/dkc7u9v5q.css';
import '../../css/c/cl0ol6klf.css';
import '../../css/h/hmvgntdxp.css';
import '../../css/k/kiq_-eb_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="dkc7u9v5q"/><path class="cl0ol6klf"/></g><path clip-rule="evenodd" class="hmvgntdxp"/><path class="kiq_-eb_n"/></g>`,
		"fallback": "pepicons:exclamation-print",
	});
}

export default Component;
