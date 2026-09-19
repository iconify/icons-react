import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnd46w4ky.css';
import '../../css/z/zituklbcd.css';
import '../../css/l/lw1yluboz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nnd46w4ky"><path class="zituklbcd"/><path class="lw1yluboz"/></g>`,
		"fallback": "flat-color-icons:download",
	});
}

export default Component;
