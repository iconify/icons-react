import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf823hmzw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf823hmzw"/>`,
		"fallback": "streamline:entertainment-control-button-play-pause-button-television-buttons-movies-play-pause-video-controls",
	});
}

export default Component;
