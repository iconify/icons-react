import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu71owqar.css';
import '../../css/i/isras2boi.css';
import '../../css/r/r8sdp5bdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gu71owqar"/><path clip-rule="evenodd" class="isras2boi"/><path class="r8sdp5bdc"/></g>`,
		"fallback": "healthicons:chlamydia-alt",
	});
}

export default Component;
