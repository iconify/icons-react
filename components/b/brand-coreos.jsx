import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n04szjpnk.css';
import '../../css/d/dxf42hrfr.css';
import '../../css/c/coyx2lbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n04szjpnk"/><path class="dxf42hrfr"/><path class="coyx2lbbf"/></g>`,
		"fallback": "tabler:brand-coreos",
	});
}

export default Component;
