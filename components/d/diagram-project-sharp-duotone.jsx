import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qd5thkqro.css';
import '../../css/d/d6gipsb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qd5thkqro"/><path class="d6gipsb1q"/></g>`,
		"fallback": "keyline-icons:diagram-project-sharp-duotone",
	});
}

export default Component;
