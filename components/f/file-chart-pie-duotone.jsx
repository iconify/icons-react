import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kewlx_8_q.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/n/nsvckbl7j.css';
import '../../css/j/j-2ozbcdp.css';
import '../../css/t/tudmxnbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kewlx_8_q"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="nsvckbl7j"/><path class="j-2ozbcdp"/><path class="tudmxnbiy"/></g>`,
		"fallback": "lucide-extended:file-chart-pie-duotone",
	});
}

export default Component;
