import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x84uwf13n.css';
import '../../css/o/otuz_0bls.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x84uwf13n"/><path class="otuz_0bls"/></g>`,
		"fallback": "streamline:entertainment-control-button-rewind-2-rewind-television-button-movies-buttons-tv-video-controls",
	});
}

export default Component;
