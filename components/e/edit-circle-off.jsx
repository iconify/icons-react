import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzv_--b6p.css';
import '../../css/b/bm58psb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dzv_--b6p"/><path class="bm58psb3l"/></g>`,
		"fallback": "tabler:edit-circle-off",
	});
}

export default Component;
