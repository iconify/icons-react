import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/b/ble3jubnc.css';
import '../../css/s/shz9zobhz.css';
import '../../css/r/r4tcq2bcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="ble3jubnc"/><path class="shz9zobhz"/><path class="r4tcq2bcg"/></g>`,
		"fallback": "icon-park-solid:curling",
	});
}

export default Component;
