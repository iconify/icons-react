import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ixjqv6b8v.css';
import '../../css/t/tmv9y_b2r.css';
import '../../css/h/h0sy7lv6l.css';
import '../../css/c/cm1yplbuf.css';
import '../../css/q/qt02m35xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ixjqv6b8v wm-shadow"/><path class="tmv9y_b2r"/><path class="h0sy7lv6l"/><path class="cm1yplbuf"/><path class="qt02m35xc"/></g>`,
		"fallback": "withicons-retro:gold-ingot",
	});
}

export default Component;
