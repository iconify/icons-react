import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbtsv3bus.css';
import '../../css/g/gtqcty8ki.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbtsv3bus"/><path class="gtqcty8ki"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-video-movie-producer-director-chair",
	});
}

export default Component;
