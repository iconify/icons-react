import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mhqt064do.css';
import '../../css/s/sly2r52fa.css';
import '../../css/s/sukohubkj.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mhqt064do"/><path class="sly2r52fa wm-k"/><path class="sukohubkj wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-column-stacked",
	});
}

export default Component;
