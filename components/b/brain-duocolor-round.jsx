import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f19ze5brw.css';
import '../../css/c/cqb78j2rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f19ze5brw"/><path class="cqb78j2rt"/></g>`,
		"fallback": "coolicons:brain-duocolor-round",
	});
}

export default Component;
