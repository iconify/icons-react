import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vznod2tgq.css';
import '../../css/g/gufa1abqb.css';
import '../../css/i/i_6ts1ome.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vznod2tgq"/><path class="gufa1abqb"/><path class="i_6ts1ome"/></g>`,
		"fallback": "bi:browser-edge",
	});
}

export default Component;
