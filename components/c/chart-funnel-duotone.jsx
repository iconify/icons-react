import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uc_7g-z5a.css';
import '../../css/s/sop3spb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uc_7g-z5a"/><path class="primary sop3spb4g"/></g>`,
		"fallback": "iconaut:chart-funnel-duotone",
	});
}

export default Component;
