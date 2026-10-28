import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t--xytb9r.css';
import '../../css/c/clx0kobhk.css';
import '../../css/o/oxq_4hblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="t--xytb9r"/><rect class="clx0kobhk"/><path class="oxq_4hblw"/></g>`,
		"fallback": "andrsrxn:container-off",
	});
}

export default Component;
