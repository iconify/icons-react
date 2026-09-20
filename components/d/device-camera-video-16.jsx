import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hymmnccew.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hymmnccew"/>`,
		"fallback": "octicon:device-camera-video-16",
	});
}

export default Component;
