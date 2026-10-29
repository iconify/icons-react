import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fra2v7_xn.css';
import '../../css/a/a3k-1f3du.css';
import '../../css/g/g-hjsdwyd.css';
import '../../css/i/ipd-k6pcu.css';
import '../../css/q/qt-cpdbku.css';
import '../../css/y/yh6k4ccjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fra2v7_xn wm-deco"/><path class="a3k-1f3du wm-deco"/><path class="g-hjsdwyd wm-k"/><path class="ipd-k6pcu wm-a"/><path class="qt-cpdbku wm-k"/><path class="wm-a yh6k4ccjk"/></g>`,
		"fallback": "withicons:arrow-down-blueprint",
	});
}

export default Component;
