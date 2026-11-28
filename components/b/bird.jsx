import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wqf7p-_1n.css';
import '../../css/m/md_cc_yxf.css';
import '../../css/v/vgww05bik.css';
import '../../css/s/sxktg47-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wqf7p-_1n"/><path class="md_cc_yxf"/><path class="vgww05bik"/><path class="sxktg47-o"/></g>`,
		"fallback": "iconaut:bird",
	});
}

export default Component;
