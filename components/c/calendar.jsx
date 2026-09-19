import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sj5m28f3q.css';
import '../../css/y/y-qaprb-g.css';
import '../../css/m/mue6u3r5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="sj5m28f3q"/><path class="y-qaprb-g"/><path class="mue6u3r5e"/></g>`,
		"fallback": "humbleicons:calendar",
	});
}

export default Component;
