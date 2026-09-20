import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxce8tbyt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxce8tbyt"/>`,
		"fallback": "streamline:entertainment-volume-down-speaker-down-volume-control-audio-music-decrease",
	});
}

export default Component;
