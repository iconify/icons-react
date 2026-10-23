import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koptpmbha.css';
import '../../css/x/xq1fy2kwk.css';
import '../../css/x/x2vrhubgi.css';
import '../../css/w/wjj2bct6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="koptpmbha"/><rect transform="matrix(1 0 0 -1 1.76 22.27)" class="xq1fy2kwk"/><path class="x2vrhubgi"/><path class="wjj2bct6f"/></g>`,
		"fallback": "andrsrxn:copy-text",
	});
}

export default Component;
