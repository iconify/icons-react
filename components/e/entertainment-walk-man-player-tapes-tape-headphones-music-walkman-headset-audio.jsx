import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uz10drbtc.css';
import '../../css/u/upostvg8f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="uz10drbtc"/><path class="upostvg8f"/></g>`,
		"fallback": "streamline:entertainment-walk-man-player-tapes-tape-headphones-music-walkman-headset-audio",
	});
}

export default Component;
