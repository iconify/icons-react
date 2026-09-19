import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cdcw8t-og.css';
import '../../css/u/uqwcdyain.css';
import '../../css/j/j4eiq8x9y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cdcw8t-og"/><path class="uqwcdyain"/><path class="j4eiq8x9y"/></g>`,
		"fallback": "icon-park-solid:add-subset",
	});
}

export default Component;
