import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d_pslabds.css';
import '../../css/t/thnklwbpk.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d_pslabds"/><path class="thnklwbpk"/><path class="ei48vjbzf"/></g>`,
		"fallback": "keyline-icons:brain-circuit-two-tone",
	});
}

export default Component;
