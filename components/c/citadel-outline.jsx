import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pqh-q_bgz.css';
import '../../css/e/ehqj47bjc.css';
import '../../css/v/vr7ulcb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="pqh-q_bgz"/><path class="ehqj47bjc"/><path class="vr7ulcb1p"/></g>`,
		"fallback": "bitcoin-icons:citadel-outline",
	});
}

export default Component;
