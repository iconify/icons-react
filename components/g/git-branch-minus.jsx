import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyea5z12j.css';
import '../../css/q/q9tg9ibse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wyea5z12j"/><path class="q9tg9ibse"/></g>`,
		"fallback": "hugeicons:git-branch-minus",
	});
}

export default Component;
