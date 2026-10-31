import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_qg2hb2n.css';
import '../../css/j/j8yx7sbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_qg2hb2n"/><path class="j8yx7sbbx"/></g>`,
		"fallback": "coolicons:git-pull-request-draft-bulk-round",
	});
}

export default Component;
