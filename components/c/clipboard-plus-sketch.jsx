import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r9-sysbhq.css';
import '../../css/l/ltqa-nbit.css';
import '../../css/k/k58yhuiry.css';
import '../../css/l/lcld7sb_p.css';
import '../../css/l/lkcu5tbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r9-sysbhq"/><path class="ltqa-nbit wm-k"/><path class="k58yhuiry wm-a"/><path class="lcld7sb_p wm-k"/><path class="lkcu5tbsw wm-a"/></g>`,
		"fallback": "withicons:clipboard-plus-sketch",
	});
}

export default Component;
