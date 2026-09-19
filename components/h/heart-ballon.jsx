import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dpw7iybqy.css';
import '../../css/l/lrhr39bkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dpw7iybqy"/><path class="lrhr39bkv"/></g>`,
		"fallback": "icon-park-solid:heart-ballon",
	});
}

export default Component;
