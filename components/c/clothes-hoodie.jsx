import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j6z07byko.css';
import '../../css/k/kekjv6-hw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="j6z07byko"/><path class="kekjv6-hw"/></g>`,
		"fallback": "icon-park-solid:clothes-hoodie",
	});
}

export default Component;
