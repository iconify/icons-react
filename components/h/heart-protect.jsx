import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4o0brbkb.css';
import '../../css/d/dxgf3sb-g.css';
import '../../css/f/f83er7b7j.css';
import '../../css/r/rfrcf3bnc.css';
import '../../css/c/cmkhqnkwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z4o0brbkb"/><path class="dxgf3sb-g"/><path class="f83er7b7j"/><path class="rfrcf3bnc"/><path class="cmkhqnkwj"/></g>`,
		"fallback": "streamline-cyber-color:heart-protect",
	});
}

export default Component;
