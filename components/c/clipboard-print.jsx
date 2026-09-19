import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/a/a4imupo2v.css';
import '../../css/f/fxe-jccqn.css';
import '../../css/s/st9amz82z.css';
import '../../css/q/qptf5_b3w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="a4imupo2v"/><path class="fxe-jccqn"/></g><path clip-rule="evenodd" class="st9amz82z"/><path clip-rule="evenodd" class="qptf5_b3w"/></g>`,
		"fallback": "pepicons:clipboard-print",
	});
}

export default Component;
