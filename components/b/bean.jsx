import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px6wupeym.css';
import '../../css/o/opvumqbnq.css';
import '../../css/d/dr9gut14h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px6wupeym"/><path class="opvumqbnq"/><path class="dr9gut14h"/></g>`,
		"fallback": "tdesign:bean",
	});
}

export default Component;
