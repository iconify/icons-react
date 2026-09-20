import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw2v_fbbh.css';
import '../../css/g/gu10zdn1y.css';
import '../../css/g/g8js9ibgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kw2v_fbbh"/><path class="gu10zdn1y"/><path class="g8js9ibgt"/></g>`,
		"fallback": "lets-icons:file-dock-duotone",
	});
}

export default Component;
