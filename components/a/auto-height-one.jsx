import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jr7-gf3vx.css';
import '../../css/m/m05lnlbeu.css';
import '../../css/k/k2glh2bcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="jr7-gf3vx"/><path class="m05lnlbeu"/><path class="k2glh2bcv"/></g>`,
		"fallback": "icon-park-outline:auto-height-one",
	});
}

export default Component;
