import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mr99q4ujx.css';
import '../../css/c/cnbk0qb_n.css';
import '../../css/u/u18laeb4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="mr99q4ujx"/><circle class="cnbk0qb_n"/><path class="u18laeb4z"/></g>`,
		"fallback": "streamline:entertainment-recording-tape-1-film-television-tv-movies-reel-video",
	});
}

export default Component;
