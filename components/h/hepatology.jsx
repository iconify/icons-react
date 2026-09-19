import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7r1nhd7o.css';
import '../../css/c/cuwa4bc2b.css';
import '../../css/t/tl2anybkp.css';
import '../../css/k/krszl1h2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y7r1nhd7o"/><path clip-rule="evenodd" class="cuwa4bc2b"/><path class="tl2anybkp"/><path clip-rule="evenodd" class="krszl1h2x"/></g>`,
		"fallback": "healthicons:hepatology",
	});
}

export default Component;
