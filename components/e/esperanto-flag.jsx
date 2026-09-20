import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/l/lze8anq-p.css';
import '../../css/q/q_x6h4byx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="lze8anq-p"/><path transform="matrix(.9199 0 0 .9196 1.096 1.101)" class="q_x6h4byx"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:esperanto-flag",
	});
}

export default Component;
