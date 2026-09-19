import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rdmdnqb9t.css';
import '../../css/r/rsiinqzsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rdmdnqb9t"/><path class="rsiinqzsx"/></g>`,
		"fallback": "hugeicons:cupcake-01",
	});
}

export default Component;
