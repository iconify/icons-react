import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7yby9bla.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7yby9bla"/>`,
		"fallback": "streamline:entertainment-volume-level-off-volume-speaker-control-music-audio",
	});
}

export default Component;
