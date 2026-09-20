import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k92fbmb_j.css';
import '../../css/b/ben_xoqbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k92fbmb_j"/><path class="ben_xoqbo"/></g>`,
		"fallback": "tabler:calendar-due",
	});
}

export default Component;
