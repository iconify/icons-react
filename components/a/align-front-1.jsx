import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfort1kld.css';
import '../../css/v/ve1qelt5w.css';
import '../../css/d/dqskgibai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rfort1kld"/><path class="ve1qelt5w"/><path class="dqskgibai"/></g>`,
		"fallback": "streamline-color:align-front-1",
	});
}

export default Component;
