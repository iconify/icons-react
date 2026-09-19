import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcuyecskv.css';
import '../../css/b/bqc8i0b_d.css';
import '../../css/z/znrnx5bpx.css';
import '../../css/i/i7y2ohbei.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcuyecskv"/><path class="bqc8i0b_d"/><path class="znrnx5bpx"/><path class="i7y2ohbei"/></g>`,
		"fallback": "devicon-plain:googlecloud",
	});
}

export default Component;
