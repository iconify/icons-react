import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/ixcu8hbdk.css';
import '../../css/q/qpdv9achi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ixcu8hbdk"/><path class="qpdv9achi"/></g>`,
		"fallback": "reicon:bag-cross2",
	});
}

export default Component;
