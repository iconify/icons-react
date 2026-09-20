import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg7aqnbsf.css';
import '../../css/a/aix3d_r5g.css';
import '../../css/l/lilq786-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mg7aqnbsf"/><rect transform="rotate(-90 6 20)" class="aix3d_r5g"/><rect transform="rotate(-90 14 16)" class="lilq786-o"/></g>`,
		"fallback": "majesticons:align-top-line",
	});
}

export default Component;
