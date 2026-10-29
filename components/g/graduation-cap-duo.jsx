import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q_93w2hzy.css';
import '../../css/s/sx67sebev.css';
import '../../css/l/l2miw0nqo.css';
import '../../css/t/ttlc-na8v.css';
import '../../css/p/po6tsm3ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q_93w2hzy"/><path class="sx67sebev"/><path class="l2miw0nqo wm-a"/><path class="ttlc-na8v"/><path class="po6tsm3ou"/></g>`,
		"fallback": "withicons:graduation-cap-duo",
	});
}

export default Component;
