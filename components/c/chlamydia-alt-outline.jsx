import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3nro693m.css';
import '../../css/x/xvxzg_-bz.css';
import '../../css/b/b80cirbss.css';
import '../../css/r/r8sdp5bdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u3nro693m"/><path clip-rule="evenodd" class="xvxzg_-bz"/><path clip-rule="evenodd" class="b80cirbss"/><path class="r8sdp5bdc"/></g>`,
		"fallback": "healthicons:chlamydia-alt-outline",
	});
}

export default Component;
