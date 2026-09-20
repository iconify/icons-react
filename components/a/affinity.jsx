import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhlhglulc.css';
import '../../css/k/k1nvv5m4k.css';

const viewBox = {"width":240,"height":240};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhlhglulc"/><path class="k1nvv5m4k"/>`,
		"fallback": "thesvg-color:affinity",
	});
}

export default Component;
