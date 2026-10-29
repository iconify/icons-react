import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aqchclblf.css';
import '../../css/w/wz1qby_sz.css';
import '../../css/q/qo2rnubvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="aqchclblf"/><path class="wz1qby_sz"/><path class="qo2rnubvt"/></g>`,
		"fallback": "withicons-bauhaus:circuit-board",
	});
}

export default Component;
