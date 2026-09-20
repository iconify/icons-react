import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq7suuqlf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq7suuqlf"/>`,
		"fallback": "streamline:entertainment-volume-level-high-speaker-high-volume-control-audio-music",
	});
}

export default Component;
