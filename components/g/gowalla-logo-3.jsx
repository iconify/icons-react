import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qnyksih8p.css';
import '../../css/f/foqtcobmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qnyksih8p"/><path class="foqtcobmy"/></g>`,
		"fallback": "streamline-logos:gowalla-logo-3",
	});
}

export default Component;
