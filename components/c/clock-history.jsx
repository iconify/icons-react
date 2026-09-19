import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6yb07oyv.css';
import '../../css/x/xok_n9bbo.css';
import '../../css/n/nc18fzb9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6yb07oyv"/><path class="xok_n9bbo"/><path class="nc18fzb9i"/></g>`,
		"fallback": "bi:clock-history",
	});
}

export default Component;
