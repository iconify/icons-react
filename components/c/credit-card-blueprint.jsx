import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k74zkac6c.css';
import '../../css/r/rhnsbwb-m.css';
import '../../css/t/tvbjsxrsv.css';
import '../../css/m/mikouibnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k74zkac6c wm-deco"/><path class="rhnsbwb-m wm-deco"/><path class="tvbjsxrsv wm-k"/><path class="mikouibnu wm-a"/></g>`,
		"fallback": "withicons:credit-card-blueprint",
	});
}

export default Component;
