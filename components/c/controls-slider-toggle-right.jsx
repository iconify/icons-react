import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekoh0jz2p.css';
import '../../css/l/lxdmde86d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekoh0jz2p"/><path class="lxdmde86d"/></g>`,
		"fallback": "streamline-freehand-color:controls-slider-toggle-right",
	});
}

export default Component;
