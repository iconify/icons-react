import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2_ijq2bv.css';
import '../../css/t/tn_ebwbvg.css';
import '../../css/o/os03_hbki.css';
import '../../css/h/hawnnzqnt.css';
import '../../css/k/k6rmqzb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q2_ijq2bv"/><path class="tn_ebwbvg"/><path class="os03_hbki"/><path class="hawnnzqnt"/><path class="k6rmqzb3g"/></g>`,
		"fallback": "lucide-extended:chocolate-bar-duotone",
	});
}

export default Component;
