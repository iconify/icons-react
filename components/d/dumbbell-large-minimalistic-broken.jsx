import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/meyfvxbup.css';
import '../../css/b/ba6q5sn1q.css';
import '../../css/b/b7fd3hbhl.css';
import '../../css/r/rcu-dxg4m.css';
import '../../css/k/kqpvbv78p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="meyfvxbup"/><path class="ba6q5sn1q"/><path class="b7fd3hbhl"/><path class="rcu-dxg4m"/><path class="kqpvbv78p"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-broken",
	});
}

export default Component;
