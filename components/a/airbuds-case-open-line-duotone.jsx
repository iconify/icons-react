import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k9shapbbb.css';
import '../../css/x/xt416ub-e.css';
import '../../css/u/u56i8ebee.css';
import '../../css/d/d-zzacc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k9shapbbb"/><path class="xt416ub-e"/><path class="u56i8ebee"/><path class="d-zzacc2s"/></g>`,
		"fallback": "solar:airbuds-case-open-line-duotone",
	});
}

export default Component;
