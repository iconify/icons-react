import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymj9h20wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymj9h20wk"/>`,
		"fallback": "octicon:device-camera-video-24",
	});
}

export default Component;
