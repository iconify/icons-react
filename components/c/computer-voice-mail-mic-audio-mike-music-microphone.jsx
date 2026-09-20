import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t42wznb_s.css';
import '../../css/k/kc1k82b8n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t42wznb_s"/><path class="kc1k82b8n"/></g>`,
		"fallback": "streamline:computer-voice-mail-mic-audio-mike-music-microphone",
	});
}

export default Component;
