import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qd5thkqro.css';
import '../../css/u/umpugbc2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qd5thkqro"/><path class="umpugbc2a"/></g>`,
		"fallback": "keyline-icons:diagram-project-sharp-two-tone",
	});
}

export default Component;
