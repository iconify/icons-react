import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvqheo0jt.css';
import '../../css/q/qqwrf1bfq.css';
import '../../css/b/byt_qtm9k.css';
import '../../css/w/wtowt5b_g.css';
import '../../css/o/oxapusb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow yvqheo0jt"/><path class="qqwrf1bfq wm-k"/><path class="byt_qtm9k wm-k"/><path class="wm-k wtowt5b_g"/><path class="oxapusb_d wm-k"/>`,
		"fallback": "withicons-pastel:bitcoin",
	});
}

export default Component;
