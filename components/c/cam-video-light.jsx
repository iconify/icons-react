import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5k4mmokm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5k4mmokm"/>`,
		"fallback": "stash:cam-video-light",
	});
}

export default Component;
