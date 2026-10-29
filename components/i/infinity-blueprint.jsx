import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/ncjp18bwi.css';
import '../../css/z/zhjby8xue.css';
import '../../css/v/vs77whb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ncjp18bwi wm-deco"/><path class="wm-deco zhjby8xue"/><path class="vs77whb3h"/></g>`,
		"fallback": "withicons:infinity-blueprint",
	});
}

export default Component;
