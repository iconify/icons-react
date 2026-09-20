import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8l6ctros.css';
import '../../css/e/e03vvifky.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e8l6ctros"/><path class="e03vvifky"/></g>`,
		"fallback": "streamline:entertainment-control-button-fast-forward-1-button-controls-fast-forward-movies-television-video-tv",
	});
}

export default Component;
