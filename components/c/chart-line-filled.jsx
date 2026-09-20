import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eeqsn4g2l.css';
import '../../css/b/b9mgajbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eeqsn4g2l"/><path class="b9mgajbmm"/></g>`,
		"fallback": "reicon:chart-line-filled",
	});
}

export default Component;
