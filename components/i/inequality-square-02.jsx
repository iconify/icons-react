import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/l/lrjcf4bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jvtjbnueh"/><path class="lrjcf4bgc"/></g>`,
		"fallback": "hugeicons:inequality-square-02",
	});
}

export default Component;
