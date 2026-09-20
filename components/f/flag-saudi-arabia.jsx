import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/l/lf-jwt-qb.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="lf-jwt-qb"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-saudi-arabia",
	});
}

export default Component;
