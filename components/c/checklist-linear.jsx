import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oaddbsbpv.css';
import '../../css/p/p-hr47b7d.css';
import '../../css/t/tzwo1sgpu.css';
import '../../css/h/hrf5bu8dg.css';
import '../../css/z/zf3b4qbxv.css';
import '../../css/p/pb8r5z_os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oaddbsbpv"/><path class="p-hr47b7d"/><path class="tzwo1sgpu"/><path class="hrf5bu8dg"/><path class="zf3b4qbxv"/><path class="pb8r5z_os"/></g>`,
		"fallback": "solar:checklist-linear",
	});
}

export default Component;
