import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn95nbc_a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn95nbc_a"/>`,
		"fallback": "streamline:entertainment-volume-off-speaker-music-mute-volume-control-audio-off-mute",
	});
}

export default Component;
