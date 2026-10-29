import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/n/njzl-xs7y.css';
import '../../css/x/xbvdd22_g.css';
import '../../css/h/hma0zebrc.css';
import '../../css/x/x7ztvqbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGE04lfbVZ" x1="3.1" x2="20.9" y1="9.1" y2="14.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGK5YqFepu" x1="6.9" x2="17.1" y1="1.9" y2="22.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="njzl-xs7y wm-a"/><path fill="url(#SVGE04lfbVZ)" class="wm-a xbvdd22_g"/><path class="hma0zebrc wm-k"/><path fill="url(#SVGK5YqFepu)" class="wm-k x7ztvqbrn"/></g>`,
		"fallback": "withicons-suite:audio-lines",
	});
}

export default Component;
