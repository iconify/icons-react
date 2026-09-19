import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o33mwxhyt.css';
import '../../css/q/qbcnfz05l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o33mwxhyt"/><path class="qbcnfz05l"/></g>`,
		"fallback": "pepicons:headphone",
	});
}

export default Component;
