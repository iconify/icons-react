import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hdh_7z44n.css';
import '../../css/b/b0-fhem7h.css';
import '../../css/v/v81nbqbbf.css';
import '../../css/v/v0j5nabxd.css';
import '../../css/h/hg_ketbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hdh_7z44n"/><path class="b0-fhem7h wm-k"/><path class="v81nbqbbf wm-a"/><path class="v0j5nabxd wm-k"/><path class="hg_ketbuy wm-a"/></g>`,
		"fallback": "withicons:cursor-sketch",
	});
}

export default Component;
