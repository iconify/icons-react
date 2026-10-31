import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-l11-55q.css';
import '../../css/y/yyrf-ibdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a-l11-55q"/><path class="yyrf-ibdj"/></g>`,
		"fallback": "coolicons:cursor-sparkle-duocolor-round",
	});
}

export default Component;
