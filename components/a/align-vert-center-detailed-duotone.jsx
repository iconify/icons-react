import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oid7mlb3a.css';
import '../../css/v/vxqb2ubqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oid7mlb3a"/><path class="vxqb2ubqz"/></g>`,
		"fallback": "si:align-vert-center-detailed-duotone",
	});
}

export default Component;
