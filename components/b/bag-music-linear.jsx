import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v6u0s-b6v.css';
import '../../css/b/b2wq-2kdm.css';
import '../../css/e/eetq4kbnf.css';
import '../../css/j/j5_c5z0qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v6u0s-b6v"/><path class="b2wq-2kdm"/><path class="eetq4kbnf"/><path class="j5_c5z0qq"/></g>`,
		"fallback": "solar:bag-music-linear",
	});
}

export default Component;
