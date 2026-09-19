import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b762ssb3l.css';
import '../../css/d/do5c85pxd.css';
import '../../css/b/b7af41btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="b762ssb3l"/><path class="do5c85pxd"/><path class="b7af41btv"/></g>`,
		"fallback": "hugeicons:cupcake-03",
	});
}

export default Component;
