import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g81aj0bod.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g81aj0bod"/>`,
		"fallback": "streamline:entertainment-volume-mute-speaker-remove-volume-control-audio-music-mute-off",
	});
}

export default Component;
