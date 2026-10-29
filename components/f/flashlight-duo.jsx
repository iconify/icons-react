import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/ps73y_alv.css';
import '../../css/a/a5neubxnb.css';
import '../../css/n/n4ra6qb5a.css';
import '../../css/h/h4uzyibtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ps73y_alv"/><path class="a5neubxnb wm-s"/><path class="n4ra6qb5a"/><path class="h4uzyibtm wm-a"/></g>`,
		"fallback": "withicons:flashlight-duo",
	});
}

export default Component;
