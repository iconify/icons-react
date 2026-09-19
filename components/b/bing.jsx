import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pv5xoy4cx.css';
import '../../css/g/gi7t4nbmx.css';
import '../../css/c/cm4rcmp0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pv5xoy4cx"/><path class="gi7t4nbmx"/><path class="cm4rcmp0m"/></g>`,
		"fallback": "bi:bing",
	});
}

export default Component;
