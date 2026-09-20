import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d250soieu.css';
import '../../css/h/hdcm3gbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="d250soieu"/><path vector-effect="non-scaling-stroke" class="hdcm3gbmg"/></g>`,
		"fallback": "wordpress:calendar",
	});
}

export default Component;
