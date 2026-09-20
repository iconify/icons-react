import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3w73pktn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3w73pktn"/>`,
		"fallback": "streamline:computer-voice-mail-off-mic-audio-mike-music-microphone-mute-off",
	});
}

export default Component;
