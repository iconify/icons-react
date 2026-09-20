import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ufx_3tb7d.css';
import '../../css/o/obvo8wuhs.css';
import '../../css/u/uksi1rdrk.css';
import '../../css/m/mh8lsoz8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ufx_3tb7d"/><circle class="obvo8wuhs"/><rect class="uksi1rdrk"/><path class="mh8lsoz8r"/></g>`,
		"fallback": "streamline:entertainment-camera-video-film-television-tv-camera-movies-video-recorder",
	});
}

export default Component;
