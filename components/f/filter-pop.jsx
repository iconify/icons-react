import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-01p2b3g.css';
import '../../css/w/wq745y84s.css';
import '../../css/o/ol3nop4gg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-01p2b3g"/><path class="wq745y84s"/><path class="ol3nop4gg"/></g>`,
		"fallback": "streamline-kameleon-color:filter-pop",
	});
}

export default Component;
