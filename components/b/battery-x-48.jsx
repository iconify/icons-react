import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3k7ob7e.css';
import '../../css/a/a-4s07bqr.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/p/pwmnyqitk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3k7ob7e"/><path class="a-4s07bqr"/><path class="t8dqc66mp"/><path class="pwmnyqitk"/>`,
		"fallback": "energy-icons:battery-x-48",
	});
}

export default Component;
