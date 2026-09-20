import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzbq1d81g.css';
import '../../css/t/tqspuel1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lzbq1d81g"/><path class="tqspuel1u"/></g>`,
		"fallback": "tabler:inner-shadow-left",
	});
}

export default Component;
