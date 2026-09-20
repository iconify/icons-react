import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5g2wvbat.css';
import '../../css/r/reluocb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5g2wvbat"/><path class="reluocb-k"/></g>`,
		"fallback": "reicon:bill-duotone",
	});
}

export default Component;
