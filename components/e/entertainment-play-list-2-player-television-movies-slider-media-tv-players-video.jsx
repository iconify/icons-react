import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p2gjfnnwe.css';
import '../../css/d/dudc5xbbm.css';
import '../../css/s/sx1tplbmq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p2gjfnnwe"/><rect class="dudc5xbbm"/><path class="sx1tplbmq"/></g>`,
		"fallback": "streamline:entertainment-play-list-2-player-television-movies-slider-media-tv-players-video",
	});
}

export default Component;
