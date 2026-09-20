import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8l6ctros.css';
import '../../css/g/gz6t8xfrh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e8l6ctros"/><path class="gz6t8xfrh"/></g>`,
		"fallback": "streamline:entertainment-control-button-fast-forward-2-button-controls-fast-forward-movies-television-video-tv",
	});
}

export default Component;
