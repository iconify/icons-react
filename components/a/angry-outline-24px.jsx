import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5ap_-bph.css';
import '../../css/z/zg3xzp7wr.css';
import '../../css/z/z8ulehbux.css';
import '../../css/e/eoihjuteu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m5ap_-bph"/><path clip-rule="evenodd" class="zg3xzp7wr"/><path class="z8ulehbux"/><path class="eoihjuteu"/></g>`,
		"fallback": "healthicons:angry-outline-24px",
	});
}

export default Component;
