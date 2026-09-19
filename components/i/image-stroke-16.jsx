import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/ph1s97tzl.css';
import '../../css/y/yh4fy_bgb.css';
import '../../css/t/tpngvrbhl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="ph1s97tzl"/><path class="yh4fy_bgb"/></g><circle class="tpngvrbhl"/>`,
		"fallback": "garden:image-stroke-16",
	});
}

export default Component;
