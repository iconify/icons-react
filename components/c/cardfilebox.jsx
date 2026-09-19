import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygrl_wc0y.css';
import '../../css/j/j0v773bhr.css';
import '../../css/d/dkef1-7ks.css';
import '../../css/n/neswouibg.css';
import '../../css/j/ji1vlo-0s.css';
import '../../css/e/ewrr21bec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygrl_wc0y"/><path class="j0v773bhr"/><path class="dkef1-7ks"/><path class="neswouibg"/><path class="ji1vlo-0s"/><path class="ewrr21bec"/>`,
		"fallback": "fxemoji:cardfilebox",
	});
}

export default Component;
