import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kagck7u2w.css';
import '../../css/b/b0nisrqlo.css';
import '../../css/b/bj734-boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kagck7u2w"/><path class="b0nisrqlo"/><path class="bj734-boy"/></g>`,
		"fallback": "hugeicons:ai-network",
	});
}

export default Component;
