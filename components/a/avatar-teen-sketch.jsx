import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fzx9q9b-g.css';
import '../../css/a/aecemzbxq.css';
import '../../css/w/wu7pu2bgf.css';
import '../../css/z/z3lq_puen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fzx9q9b-g wm-k"/><path class="aecemzbxq wm-a"/><path class="wm-k wu7pu2bgf"/><path class="wm-a z3lq_puen"/></g>`,
		"fallback": "withicons:avatar-teen-sketch",
	});
}

export default Component;
