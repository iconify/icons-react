import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yt1cz2byh.css';
import '../../css/l/lq39jlbzt.css';
import '../../css/q/qn3hhe_6n.css';
import '../../css/v/vl9i0ibpc.css';
import '../../css/v/vwapwaboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yt1cz2byh"/><path class="lq39jlbzt wm-shadow"/><path class="qn3hhe_6n"/><path class="vl9i0ibpc"/><path class="vwapwaboa"/></g>`,
		"fallback": "withicons-brutal:fast-forward",
	});
}

export default Component;
