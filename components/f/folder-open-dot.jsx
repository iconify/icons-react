import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9waiq48s.css';
import '../../css/c/cm1btlb7g.css';
import '../../css/w/w_tclobdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u9waiq48s"/><path class="cm1btlb7g"/><path class="w_tclobdr"/></g>`,
		"fallback": "vadivam:folder-open-dot",
	});
}

export default Component;
