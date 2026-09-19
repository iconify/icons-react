import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mq_nynmza.css';
import '../../css/q/q_udj0h0z.css';
import '../../css/x/x6w93yb_v.css';
import '../../css/v/vr_ysibut.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mq_nynmza"/><path class="q_udj0h0z"/><path class="x6w93yb_v"/><path class="vr_ysibut"/></g>`,
		"fallback": "glyphs:hurricane-outline",
	});
}

export default Component;
