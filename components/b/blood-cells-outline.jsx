import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnwfqccsn.css';
import '../../css/i/i7vtvugda.css';
import '../../css/y/ygy_erbnr.css';
import '../../css/y/y4sds4b0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xnwfqccsn"/><path clip-rule="evenodd" class="i7vtvugda"/><path class="ygy_erbnr"/><path clip-rule="evenodd" class="y4sds4b0k"/></g>`,
		"fallback": "healthicons:blood-cells-outline",
	});
}

export default Component;
