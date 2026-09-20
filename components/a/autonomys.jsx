import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zydzfwbbe.css';
import '../../css/l/ln30gwdww.css';
import '../../css/i/itlbjob-i.css';
import '../../css/m/mw_1sab7i.css';
import '../../css/w/w4yj_3h6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zydzfwbbe"/><path class="ln30gwdww"/><path class="itlbjob-i"/><path class="mw_1sab7i"/><path class="w4yj_3h6f"/>`,
		"fallback": "token:autonomys",
	});
}

export default Component;
