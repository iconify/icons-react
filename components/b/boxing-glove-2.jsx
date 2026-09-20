import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri_y7bopu.css';
import '../../css/c/crms0qlfr.css';
import '../../css/j/j1_whf4ze.css';
import '../../css/f/f7c-0vb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ri_y7bopu"/><path class="crms0qlfr"/><path class="j1_whf4ze"/><path class="f7c-0vb2o"/></g>`,
		"fallback": "streamline-cyber-color:boxing-glove-2",
	});
}

export default Component;
