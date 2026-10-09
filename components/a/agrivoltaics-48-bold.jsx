import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th1ps7blh.css';
import '../../css/q/q56w78t1l.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/b/bg9q4obqt.css';
import '../../css/y/yw3j64bel.css';
import '../../css/t/teccr8lbn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th1ps7blh"/><path class="q56w78t1l"/><path class="ihmii9b0s"/><path class="bg9q4obqt"/><path class="yw3j64bel"/><path class="teccr8lbn"/>`,
		"fallback": "energy-icons:agrivoltaics-48-bold",
	});
}

export default Component;
