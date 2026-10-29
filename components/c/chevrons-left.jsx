import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/s/sr77xbcqx.css';
import '../../css/e/e4c58vivf.css';
import '../../css/e/e1k__r6gh.css';
import '../../css/x/xyd89mp4h.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQelNgctZ" x1="5" x2="12.7" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGkhrvpdQy" x1="0" x2="0" y1="3.86" y2="11.28" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="sr77xbcqx"/><path fill="url(#SVGQelNgctZ)" class="e4c58vivf wm-shine"/><path class="e1k__r6gh wm-deco"/><path fill="url(#SVGkhrvpdQy)" class="wm-deco xyd89mp4h"/><path class="mp3vtlqfi wm-deco"/></g>`,
		"fallback": "withicons-christmas:chevrons-left",
	});
}

export default Component;
