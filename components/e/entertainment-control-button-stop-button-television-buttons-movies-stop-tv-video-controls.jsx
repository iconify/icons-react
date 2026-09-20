import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmyrtdb4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="mmyrtdb4n"/>`,
		"fallback": "streamline:entertainment-control-button-stop-button-television-buttons-movies-stop-tv-video-controls",
	});
}

export default Component;
