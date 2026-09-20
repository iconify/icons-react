import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c9ptlwb1s.css';
import '../../css/p/poat1zb6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="c9ptlwb1s"/><path class="poat1zb6o"/></g>`,
		"fallback": "streamline:entertainment-play-list-3-player-television-display-movies-smartphone-media-tv-players-screen-video",
	});
}

export default Component;
