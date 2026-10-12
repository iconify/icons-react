import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9xxpvb-v.css';
import '../../css/e/e2fb1bb0n.css';
import '../../css/o/o24sug9tq.css';
import '../../css/b/b1dg_9oeq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9xxpvb-v"/><path class="e2fb1bb0n"/><path class="o24sug9tq"/><path class="b1dg_9oeq"/>`,
		"fallback": "energy-icons:ev-charger-off-20",
	});
}

export default Component;
