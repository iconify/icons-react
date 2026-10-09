import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo7q5s88y.css';
import '../../css/s/s_8gwxbem.css';
import '../../css/q/q7wl5khmr.css';
import '../../css/m/m6p15ub_a.css';
import '../../css/x/xe6_rlbou.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo7q5s88y"/><path class="s_8gwxbem"/><path class="q7wl5khmr"/><path class="m6p15ub_a"/><path class="xe6_rlbou"/>`,
		"fallback": "energy-icons:ev-plugged-20",
	});
}

export default Component;
