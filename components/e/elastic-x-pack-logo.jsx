import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fr73l01lq.css';
import '../../css/q/q5x-36clk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fr73l01lq"/><path class="q5x-36clk"/></g>`,
		"fallback": "streamline-logos:elastic-x-pack-logo",
	});
}

export default Component;
