import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o66bfemuv.css';
import '../../css/l/lms7ye19r.css';
import '../../css/j/juzjyabun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o66bfemuv"/><path class="lms7ye19r"/><path class="juzjyabun"/></g>`,
		"fallback": "andrsrxn:contrast-off",
	});
}

export default Component;
