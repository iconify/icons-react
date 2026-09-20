import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/k/kqwq9psty.css';
import '../../css/x/x26uwjy8s.css';
import '../../css/p/pf5356ber.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="u9hq09b6k"/><path class="kqwq9psty"/><path class="x26uwjy8s"/><path class="pf5356ber"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-malawi",
	});
}

export default Component;
