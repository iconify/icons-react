import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/co_82wbpu.css';
import '../../css/x/x12ldbc-o.css';
import '../../css/d/deat8u94e.css';
import '../../css/u/u3fasdn8f.css';
import '../../css/d/d5k74qanl.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="co_82wbpu wm-deco"/><path class="wm-deco x12ldbc-o"/><path class="deat8u94e wm-deco"/><path class="u3fasdn8f wm-k"/><path class="d5k74qanl wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-bob-blueprint",
	});
}

export default Component;
