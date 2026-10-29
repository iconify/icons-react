import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nglq24ukv.css';
import '../../css/y/yokixel6s.css';
import '../../css/l/lhym9qb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nglq24ukv"/><path class="yokixel6s"/><path class="lhym9qb-e"/></g>`,
		"fallback": "withicons-bauhaus:heart-handshake",
	});
}

export default Component;
