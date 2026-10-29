import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x5cgd3b7d.css';
import '../../css/k/k9-ascctz.css';
import '../../css/i/izs-3b8kh.css';
import '../../css/w/w09xprbay.css';
import '../../css/w/wtll6dz5m.css';
import '../../css/c/clwivwvku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x5cgd3b7d"/><path class="k9-ascctz wm-a"/><path class="izs-3b8kh wm-a"/><path class="w09xprbay wm-a"/><path class="wm-a wtll6dz5m"/><path class="clwivwvku"/></g>`,
		"fallback": "withicons:certificate-duo",
	});
}

export default Component;
