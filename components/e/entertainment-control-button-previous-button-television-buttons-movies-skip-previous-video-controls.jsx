import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvr7a3bqs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvr7a3bqs"/>`,
		"fallback": "streamline:entertainment-control-button-previous-button-television-buttons-movies-skip-previous-video-controls",
	});
}

export default Component;
