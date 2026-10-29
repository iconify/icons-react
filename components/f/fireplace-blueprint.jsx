import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ic6c7lb6f.css';
import '../../css/r/r5g8grb6p.css';
import '../../css/d/dlmywhbph.css';
import '../../css/k/kpi72jrye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ic6c7lb6f wm-deco"/><path class="r5g8grb6p wm-deco"/><path class="dlmywhbph wm-deco"/><path class="kpi72jrye"/></g>`,
		"fallback": "withicons:fireplace-blueprint",
	});
}

export default Component;
