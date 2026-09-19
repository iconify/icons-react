import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y3m5p6eju.css';
import '../../css/u/uej0-0qgg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y3m5p6eju"/><path class="uej0-0qgg"/></g>`,
		"fallback": "icon-park-solid:brake-pads",
	});
}

export default Component;
