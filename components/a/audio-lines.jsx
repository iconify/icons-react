import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nvf0ofbov.css';
import '../../css/s/soa8_6bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nvf0ofbov"/><path class="soa8_6bfl"/></g>`,
		"fallback": "withicons-retro:audio-lines",
	});
}

export default Component;
