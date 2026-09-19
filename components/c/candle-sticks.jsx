import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9l5qacpy.css';
import '../../css/t/t4a3_jblt.css';
import '../../css/y/ypjfbwbie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9l5qacpy"/><path class="t4a3_jblt"/><path class="ypjfbwbie"/>`,
		"fallback": "flat-color-icons:candle-sticks",
	});
}

export default Component;
