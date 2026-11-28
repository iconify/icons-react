import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i24p_w3hn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ib4ikg6hx.css';
import '../../css/e/ekk1d4bph.css';
import '../../css/g/goggwrb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i24p_w3hn secondary"/><g class="dt0cm9dhy primary"><path class="ib4ikg6hx"/><path class="ekk1d4bph"/><path class="goggwrb7r"/></g>`,
		"fallback": "iconaut:copy-minus-duo",
	});
}

export default Component;
