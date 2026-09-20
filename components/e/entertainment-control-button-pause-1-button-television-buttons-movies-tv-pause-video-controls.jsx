import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m03t3ybdp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m03t3ybdp"/>`,
		"fallback": "streamline:entertainment-control-button-pause-1-button-television-buttons-movies-tv-pause-video-controls",
	});
}

export default Component;
