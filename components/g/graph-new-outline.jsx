import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/quq1e981h.css';
import '../../css/w/wtvohyb5a.css';
import '../../css/s/stdqiukcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="quq1e981h"/><path class="wtvohyb5a"/><path clip-rule="evenodd" class="stdqiukcl"/></g>`,
		"fallback": "solar:graph-new-outline",
	});
}

export default Component;
