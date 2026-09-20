import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/v/vrch38b1p.css';
import '../../css/r/rrfyfxb_f.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="vrch38b1p"/><path class="rrfyfxb_f"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-bulgaria",
	});
}

export default Component;
