import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kurhn23aa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kurhn23aa"/>`,
		"fallback": "streamline:entertainment-control-button-next-button-television-buttons-movies-skip-next-video-controls",
	});
}

export default Component;
