import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sypk3l-ex.css';
import '../../css/k/khl0-5ytd.css';
import '../../css/x/xig3z6n5l.css';
import '../../css/h/hr0qvf_el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sypk3l-ex wm-k"/><path class="khl0-5ytd wm-a"/><path class="xig3z6n5l"/><path class="hr0qvf_el"/></g>`,
		"fallback": "withicons-bauhaus:bauble",
	});
}

export default Component;
