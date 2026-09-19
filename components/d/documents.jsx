import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_pzyr42v.css';
import '../../css/f/f5mkxw1-g.css';
import '../../css/q/qqj91ccql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_pzyr42v"/><path class="f5mkxw1-g"/><path class="qqj91ccql"/>`,
		"fallback": "ion:documents",
	});
}

export default Component;
