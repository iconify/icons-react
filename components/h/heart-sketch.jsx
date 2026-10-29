import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n20stxzlo.css';
import '../../css/r/r6wr3hswm.css';
import '../../css/b/bwhpywb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n20stxzlo"/><path class="r6wr3hswm"/><path class="bwhpywb7d"/></g>`,
		"fallback": "withicons:heart-sketch",
	});
}

export default Component;
