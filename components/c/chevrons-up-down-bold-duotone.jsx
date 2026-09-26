import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/olhf47bti.css';
import '../../css/j/jiq_xsykf.css';
import '../../css/e/e89-ybb7g.css';
import '../../css/r/r12ot5bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="olhf47bti"/><path class="jiq_xsykf"/></g><path class="e89-ybb7g"/><path class="r12ot5bmb"/></g>`,
		"fallback": "solar:chevrons-up-down-bold-duotone",
	});
}

export default Component;
