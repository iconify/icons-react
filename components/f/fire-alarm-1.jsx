import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sl_tvo9_c.css';
import '../../css/s/scuo-e2ih.css';
import '../../css/d/d25z20ufr.css';
import '../../css/i/izeq8rbsn.css';
import '../../css/n/noka30fwv.css';
import '../../css/t/tqytbk4nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sl_tvo9_c"/><path class="scuo-e2ih"/><path class="d25z20ufr"/><path class="izeq8rbsn"/><path class="noka30fwv"/><path class="tqytbk4nb"/></g>`,
		"fallback": "streamline-sharp-color:fire-alarm-1",
	});
}

export default Component;
