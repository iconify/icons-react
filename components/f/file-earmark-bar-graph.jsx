import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwdjmxbbp.css';
import '../../css/q/qsbdy4bsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lwdjmxbbp"/><path class="qsbdy4bsq"/></g>`,
		"fallback": "bi:file-earmark-bar-graph",
	});
}

export default Component;
