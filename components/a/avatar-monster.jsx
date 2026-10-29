import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gklf7-bma.css';
import '../../css/m/m298yub2x.css';
import '../../css/r/r_iwbcdvf.css';
import '../../css/l/loekhew4e.css';
import '../../css/n/nxec4mbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gklf7-bma wm-k"/><path class="m298yub2x wm-a"/><path class="r_iwbcdvf wm-k"/><path class="loekhew4e"/><path class="nxec4mbey wm-s"/></g>`,
		"fallback": "withicons-bauhaus:avatar-monster",
	});
}

export default Component;
