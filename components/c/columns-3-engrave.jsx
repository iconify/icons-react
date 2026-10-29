import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/duslw9m1c.css';
import '../../css/p/pfu4sen9o.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/o/oijoyrt4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="duslw9m1c wm-k"/><path class="pfu4sen9o wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="oijoyrt4u wm-a"/></g>`,
		"fallback": "withicons:columns-3-engrave",
	});
}

export default Component;
