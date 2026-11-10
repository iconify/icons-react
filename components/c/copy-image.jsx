import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8jmoacni.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/s/skbjqubnk.css';
import '../../css/o/ob_eeh05x.css';
import '../../css/q/qn-4ppbxb.css';
import '../../css/n/nqsobsbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8jmoacni"/><path class="tm0ea5ulw"/><path class="skbjqubnk"/><path class="ob_eeh05x"/><path class="qn-4ppbxb"/><path class="nqsobsbck"/></g>`,
		"fallback": "andrsrxn:copy-image",
	});
}

export default Component;
