import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z61tzc56x.css';
import '../../css/z/zq52d8kkr.css';
import '../../css/q/qhegkcb9q.css';
import '../../css/j/j0s02x4ym.css';
import '../../css/l/ldxjxpc6h.css';
import '../../css/x/xsbmizb1a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z61tzc56x"/><path class="zq52d8kkr"/><path class="qhegkcb9q"/><path class="j0s02x4ym"/><path class="ldxjxpc6h"/><path class="xsbmizb1a"/>`,
		"fallback": "fxemoji:foxpouting",
	});
}

export default Component;
