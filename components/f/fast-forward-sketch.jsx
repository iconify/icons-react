import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nr6fqccxw.css';
import '../../css/z/zyqc9rfhb.css';
import '../../css/d/dzs1i5bjm.css';
import '../../css/l/lrmoo_osq.css';
import '../../css/t/tbtn-lyjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nr6fqccxw"/><path class="wm-k zyqc9rfhb"/><path class="dzs1i5bjm wm-a"/><path class="lrmoo_osq wm-k"/><path class="tbtn-lyjz wm-a"/></g>`,
		"fallback": "withicons:fast-forward-sketch",
	});
}

export default Component;
