import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oe2s1dbyb.css';
import '../../css/h/hx-__9b7l.css';
import '../../css/m/moq29-b6s.css';
import '../../css/j/jvcxt3txs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oe2s1dbyb"/><path class="hx-__9b7l"/><path clip-rule="evenodd" class="moq29-b6s"/><path clip-rule="evenodd" class="jvcxt3txs"/></g>`,
		"fallback": "healthicons:fetus",
	});
}

export default Component;
