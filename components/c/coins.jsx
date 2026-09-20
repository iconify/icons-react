import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/f9uqp6_rc.css';
import '../../css/k/kfawhz9uz.css';
import '../../css/t/t-dq_9l_t.css';
import '../../css/b/bal1zy7-l.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="f9uqp6_rc"/><path class="kfawhz9uz"/><path class="t-dq_9l_t"/><path class="bal1zy7-l"/></g>`,
		"fallback": "system-uicons:coins",
	});
}

export default Component;
