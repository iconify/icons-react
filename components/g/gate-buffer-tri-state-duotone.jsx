import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dn569cb6g.css';
import '../../css/g/gmiylyxfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dn569cb6g secondary"/><path class="gmiylyxfl primary"/></g>`,
		"fallback": "iconaut:gate-buffer-tri-state-duotone",
	});
}

export default Component;
