import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakx74-2k.css';
import '../../css/b/bgmlavupy.css';
import '../../css/q/ql4-u3z_t.css';
import '../../css/b/bhq6k4ban.css';
import '../../css/d/dqe9gnbpy.css';
import '../../css/m/mvq7iljyv.css';
import '../../css/o/orll4zbji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG2Yhqttuf" cx="79" cy="62.2" r="120" gradientUnits="userSpaceOnUse"><stop offset="0" class="iakx74-2k"/><stop offset=".85" class="bgmlavupy"/><stop offset="1" class="bgmlavupy"/></radialGradient></defs><path class="ql4-u3z_t"/><path fill="url(#SVG2Yhqttuf)" transform="matrix(2.8 0 0 2.8 -28.016 -33.356)" class="bhq6k4ban"/><path class="dqe9gnbpy"/><path class="mvq7iljyv"/><path class="orll4zbji"/>`,
		"fallback": "xero-emoji:end-arrow",
	});
}

export default Component;
