import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii07wlrpv.css';
import '../../css/k/ka4sjzb_h.css';
import '../../css/w/w1bkdub3o.css';
import '../../css/a/adg_qib1g.css';
import '../../css/p/pbxq3bxvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii07wlrpv wm-k"/><path class="ka4sjzb_h wm-k"/><path class="w1bkdub3o wm-k"/><path class="adg_qib1g wm-shine"/><path class="pbxq3bxvg wm-a"/></g>`,
		"fallback": "withicons-anime:feather",
	});
}

export default Component;
