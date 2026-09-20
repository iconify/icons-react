import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs1s4bb3o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f5f0jwb-w.css';
import '../../css/g/gqdhlkbho.css';
import '../../css/d/d8_onbakg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fs1s4bb3o"/><g class="mc2zb0bvp"><path class="f5f0jwb-w"/><path class="gqdhlkbho"/><path class="d8_onbakg"/></g></g>`,
		"fallback": "solar:benzene-ring-bold-duotone",
	});
}

export default Component;
