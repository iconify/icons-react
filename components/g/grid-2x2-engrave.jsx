import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xeyq7qb5y.css';
import '../../css/d/dxjuldbtz.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/u/u1of9ltii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xeyq7qb5y"/><path class="dxjuldbtz wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="u1of9ltii wm-a"/></g>`,
		"fallback": "withicons:grid-2x2-engrave",
	});
}

export default Component;
