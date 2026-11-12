import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/a/apd8c2b_p.css';
import '../../css/k/kb4_uy8nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="apd8c2b_p"/><path class="kb4_uy8nw"/></g>`,
		"fallback": "tabler:database-up",
	});
}

export default Component;
