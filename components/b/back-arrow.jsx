import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakx74-2k.css';
import '../../css/b/bgmlavupy.css';
import '../../css/x/xnb1nzbqs.css';
import '../../css/b/bhq6k4ban.css';
import '../../css/j/jzeucm99y.css';
import '../../css/f/fbjkny_ai.css';
import '../../css/s/si_0webfs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG2Yhqttuf" cx="79" cy="62.2" r="120" gradientUnits="userSpaceOnUse"><stop offset="0" class="iakx74-2k"/><stop offset=".85" class="bgmlavupy"/><stop offset="1" class="bgmlavupy"/></radialGradient></defs><path class="xnb1nzbqs"/><path fill="url(#SVG2Yhqttuf)" transform="matrix(2.8 0 0 2.8 -28.016 -35.136)" class="bhq6k4ban"/><path class="jzeucm99y"/><path class="fbjkny_ai"/><path class="si_0webfs"/>`,
		"fallback": "xero-emoji:back-arrow",
	});
}

export default Component;
