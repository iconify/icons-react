import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/he7fpcbuw.css';
import '../../css/u/uunuyzbch.css';
import '../../css/u/u_zkbrbcy.css';
import '../../css/e/e_-fq76af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="he7fpcbuw wm-k"/><path class="uunuyzbch wm-a"/><path class="u_zkbrbcy"/><path class="e_-fq76af"/></g>`,
		"fallback": "withicons-bauhaus:grape",
	});
}

export default Component;
