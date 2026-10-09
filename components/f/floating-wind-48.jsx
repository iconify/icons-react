import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kddy26b4i.css';
import '../../css/y/y5y-mrx_b.css';
import '../../css/j/j5c0g3bgm.css';
import '../../css/o/ok2a0zu8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kddy26b4i"/><path class="y5y-mrx_b"/><path class="j5c0g3bgm"/><path class="ok2a0zu8m"/>`,
		"fallback": "energy-icons:floating-wind-48",
	});
}

export default Component;
