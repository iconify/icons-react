import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5vv-kb4g.css';
import '../../css/z/zl-nrpb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5vv-kb4g"/><path class="zl-nrpb-q"/></g>`,
		"fallback": "coolicons:cpu-duotone-round",
	});
}

export default Component;
