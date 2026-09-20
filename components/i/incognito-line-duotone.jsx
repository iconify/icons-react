import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jxmnk027l.css';
import '../../css/k/kw_qidm_b.css';
import '../../css/t/t4mumvwbw.css';
import '../../css/t/tka6adb0f.css';
import '../../css/n/nfw6dm0im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jxmnk027l"/><path class="kw_qidm_b"/><path class="t4mumvwbw"/><path class="tka6adb0f"/><path class="nfw6dm0im"/></g>`,
		"fallback": "solar:incognito-line-duotone",
	});
}

export default Component;
